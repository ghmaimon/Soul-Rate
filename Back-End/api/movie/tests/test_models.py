from core.models import Movie

from rest_framework.test import APIClient, APITestCase
from django.urls import reverse

TAGS_URL = reverse('movie_rate:tags-list')


class ModelTests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        return super().setUp()

    def test_create_movie(self):
        # test the result of creating a movie
        title = "movie_title"
        description = "movie_description"
        movie = Movie()
        movie.title = title
        movie.description = description
        movie.save()

        movie = Movie.objects.get(
            title=title,
            description=description
        )

        self.assertEqual(movie.title, title)
        self.assertEqual(movie.description, description)
