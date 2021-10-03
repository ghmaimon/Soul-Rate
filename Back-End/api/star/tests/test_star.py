from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from rest_framework import status
from core.models import Star, Movie
from django.contrib.auth import get_user_model
from star.serializers import StarSerializer
from movie.serializers import MovieListSerializer

STARS_URL = reverse('star:stars-list')


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
        res = self.client.get(STARS_URL)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_retrieve_stars(self):
        # test retrieving tags (with login)
        Star.objects.create(name="actor1")
        Star.objects.create(name="actor2")

        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        res = self.client.get(STARS_URL)
        stars = Star.objects.all().order_by('-name')

        starSer = StarSerializer(stars, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertSequenceEqual(res.data, starSer.data)

    def test_stars_are_assigned_to_movie(self):
        # test if the listed tags are the ones assigned to the given movie
        actor1 = Star.objects.create(name="actor1")
        actor2 = Star.objects.create(name="actor2")
        actor3 = Star.objects.create(name="actor3")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        self.movie.save()

        self.movie.stars.set([actor1, actor2])
        self.movie.save()

        res = self.client.get(
            reverse('movie:movies-detail', args=(self.movie.id, ))
        )

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data["stars"]), 2)
        self.assertNotIn(actor3.id, res.data["stars"])

    def test_get_movie_with_star(self):
        # test getting movies with tag
        actor1 = Star.objects.create(name="actor1")
        actor2 = Star.objects.create(name="actor2")
        actor3 = Star.objects.create(name="actor3")
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])

        self.movie.stars.set([actor1, actor2])
        self.movie.save()

        anotherMovie = Movie(title="matrix", description="action movie")
        anotherMovie.save()
        anotherMovie.stars.set([actor1, actor3])
        anotherMovie.save()

        res1 = self.client.get(
            reverse('movie:movies-withStar', args=[actor1.id, ])
        )

        res2 = self.client.get(
            reverse('movie:movies-withStar', args=[actor2.id, ])
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

    def test_create_star(self):
        # testing create tag endpoint
        data = {
            "name": "actor",
            "bio": "a random actor"
        }
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])

        res1 = self.client.post(STARS_URL, data)
        exists = Star.objects.filter(
            name=data["name"],
            bio=data["bio"]
        ).exists()

        self.assertEqual(res1.status_code, status.HTTP_201_CREATED)
        self.assertTrue(exists)

    def test_create_same_star(self):

        # testing create a tag with invalide namea
        data = {
            "name": "actor"
        }
        body = {
            "email": "exemple@gmail.com",
            "password": "password"
        }
        self.client.login(username=body["email"], password=body["password"])
        self.client.post(STARS_URL, data)
        res = self.client.post(STARS_URL, data)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
