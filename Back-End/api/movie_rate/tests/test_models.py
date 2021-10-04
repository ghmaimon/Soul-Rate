from core.models import Movie, Rating
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse

TAGS_URL = reverse('tag:tags-list')


class ModelTests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        return super().setUp()

    def test_create_rate(self):
        # test the result of creating a rate with an associated movie and user
        title = "movie_title"
        description = "movie_description"

        movie = Movie()
        movie.title = title
        movie.description = description

        movie.save()

        email = "username@something.com"
        password = "Pass1234"

        user = get_user_model().objects.create_user(
            email,
            password
        )

        stars = 4

        rate = Rating(
            movie=movie,
            user=user,
            stars=stars
        )
        rate.save()

        rate = Rating.objects.get(
            movie=movie,
            user=user,
            stars=stars
        )

        self.assertEqual(rate.movie.title, title)
        self.assertEqual(rate.movie.description, description)
        self.assertEqual(rate.user.email, email)
        self.assertTrue(rate.user.check_password(password))
        self.assertEqual(rate.stars, stars)
