from django.test import TestCase
from movie_rate import models
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_movie(self):
        # test the result of creating a movie
        title = "movie_title"
        description = "movie_description"
        movie = models.Movie(
            title=title,
            description=description
        )

        self.assertEqual(movie.title, title)
        self.assertEqual(movie.description, description)

    def test_create_rate(self):
        # test the result of creating a rate with an associated movie and user
        title = "movie_title"
        description = "movie_description"
        movie = models.Movie(
            title=title,
            description=description
        )

        email = "username@something.com"
        password = "Pass1234"
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )
        user.is_active = True

        stars = 4

        rate = models.Rating(
            movie=movie,
            user=user,
            stars=stars
        )

        self.assertEqual(rate.movie.title, title)
        self.assertEqual(rate.movie.description, description)
        self.assertEqual(rate.user.email, email)
        self.assertTrue(rate.user.check_password(password))
        self.assertEqual(rate.stars, stars)
