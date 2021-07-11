from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from rest_framework import status
from core.models import Tag, Movie
from django.contrib.auth import get_user_model


from movie_rate.serializers import MovieSerializer, TagSerializer

TAGS_URL = reverse('movie_rate:tags-list')


class TestTagApi(APITestCase):
    # test tag's api

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            email="exemple@gmail.com",
            password="password"
        )
        self.movie = Movie(title="hurry potter", description="magic movie")
        self.movie.save()

    def test_login_requered(self):
        # test that the log in is requered to retrieve tages
        res = self.client.get(TAGS_URL)

        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_retrieve_tags(self):
        # test retrieving tags (with login)
        Tag.objects.create(name="action")
        Tag.objects.create(name="fantasy")

        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        res = self.client.get(TAGS_URL)
        tags = Tag.objects.all()

        tagser = TagSerializer(tags, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertSequenceEqual(res.data, tagser.data)

    def test_tags_are_assigned_to_movie(self):
        # test if the listed tags are the ones assigned to the given movie
        actionTag = Tag.objects.create(name="Action")
        fantasyTag = Tag.objects.create(name="Fantasy")
        elseTag = Tag.objects.create(name="something else")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        self.movie.save()

        self.movie.tags.set([actionTag, fantasyTag])
        self.movie.save()

        res = self.client.get(
            reverse('movie_rate:movies-detail', args=(self.movie.id, ))
        )

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data["tags"]), 2)
        self.assertNotIn(elseTag.id, res.data["tags"])

    def test_get_movie_with_tag(self):
        # test getting movies with tag
        actionTag = Tag.objects.create(name="Action")
        fantasyTag = Tag.objects.create(name="Fantasy")
        romanceTag = Tag.objects.create(name="Romance")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])

        self.movie.tags.set([actionTag, fantasyTag])
        self.movie.save()

        anotherMovie = Movie(title="matrix", description="action movie")
        anotherMovie.save()
        anotherMovie.tags.set([actionTag, romanceTag])
        anotherMovie.save()

        res1 = self.client.get(
            reverse('movie_rate:movies-withTag', args=[actionTag.id, ])
        )

        res2 = self.client.get(
            reverse('movie_rate:movies-withTag', args=[romanceTag.id, ])
        )
        self.assertEqual(res1.status_code, status.HTTP_200_OK)
        self.assertEqual(res2.status_code, status.HTTP_200_OK)

        self.assertEqual(len(res1.data), 2)
        self.assertEqual(len(res2.data), 1)

        expected1 = MovieSerializer([self.movie, anotherMovie, ], many=True)
        expected2 = MovieSerializer([anotherMovie, ], many=True)

        self.assertSequenceEqual(res1.data, expected1.data)
        self.assertSequenceEqual(res2.data, expected2.data)
