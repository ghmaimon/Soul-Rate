from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from rest_framework import status
from core.models import Director, Movie
from django.contrib.auth import get_user_model
from director.serializers import DirectorSerializer
from movie.serializers import MovieListSerializer

DIRECTOR_URL = reverse('director:directors-list')


class TestStarApi(APITestCase):
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
        res = self.client.get(DIRECTOR_URL)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_retrieve_directors(self):
        # test retrieving tags (with login)
        Director.objects.create(name="Director1")
        Director.objects.create(name="Director2")

        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        res = self.client.get(DIRECTOR_URL)
        Directors = Director.objects.all().order_by('-name')

        DirectorSer = DirectorSerializer(Directors, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertSequenceEqual(res.data, DirectorSer.data)

    def test_directors_are_assigned_to_movie(self):
        # test if the listed tags are the ones assigned to the given movie
        Director1 = Director.objects.create(name="Director1")
        Director2 = Director.objects.create(name="Director2")
        Director3 = Director.objects.create(name="Director3")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        self.movie.save()

        self.movie.directors.set([Director1, Director2])
        self.movie.save()

        res = self.client.get(
            reverse('movie:movies-detail', args=(self.movie.id, ))
        )

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data["directors"]), 2)
        self.assertNotIn(Director3.id, res.data["directors"])

    def test_get_movie_with_directors(self):
        # test getting movies with tag
        Director1 = Director.objects.create(name="Director1")
        Director2 = Director.objects.create(name="Director2")
        Director3 = Director.objects.create(name="Director3")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])

        self.movie.directors.set([Director1, Director2])
        self.movie.save()

        anotherMovie = Movie(title="matrix", description="action movie")
        anotherMovie.save()
        anotherMovie.directors.set([Director1, Director3])
        anotherMovie.save()

        res1 = self.client.get(
            reverse('movie:movies-withDirector', args=[Director1.id, ])
        )

        res2 = self.client.get(
            reverse('movie:movies-withDirector', args=[Director2.id, ])
        )
        self.assertEqual(res1.status_code, status.HTTP_200_OK)
        self.assertEqual(res2.status_code, status.HTTP_200_OK)

        self.assertEqual(len(res1.data), 2)
        self.assertEqual(len(res2.data), 1)

        expected1 = MovieListSerializer(
            [self.movie, anotherMovie, ],
            many=True
        )
        expected2 = MovieListSerializer(
            [self.movie, ],
            many=True
        )

        self.assertSequenceEqual(res1.data, expected1.data)
        self.assertSequenceEqual(res2.data, expected2.data)

    def test_create_director(self):
        # testing create tag endpoint
        data = {
            "name": "Director",
            "bio": "a random Director"
        }
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])

        res1 = self.client.post(DIRECTOR_URL, data)
        exists = Director.objects.filter(
            name=data["name"],
            bio=data["bio"]
        ).exists()

        self.assertEqual(res1.status_code, status.HTTP_201_CREATED)
        self.assertTrue(exists)

    def test_create_same_director(self):

        # testing create a tag with invalide namea
        data = {
            "name": "Director"
        }
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        self.client.post(DIRECTOR_URL, data)
        res = self.client.post(DIRECTOR_URL, data)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
