from rest_framework import status
from core.models import Movie, Comment
from movie_comment.serializers import CommentSerializer
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient, APITestCase
from django.urls import reverse

COMMENTS_URL = reverse('movie_comment:comments-list')


class CommentTests(APITestCase):

    def setUp(self):
        email = "exemple@gmail.com"
        password = "password123"
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            email,
            password
        )
        self.movie = Movie(title="movie", description="some movie")
        self.movie.save()
        return super().setUp()

    def test_login_requered(self):
        # test that the log in is requered to retrieve tages
        res = self.client.get(COMMENTS_URL)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_comment(self):

        email = "exemple@gmail.com"
        password = "password123"
        data = {
            'user': self.user,
            'movie': self.movie,
            'content': 'awesome movie',
        }
        Comment(
            user=data['user'],
            movie=data['movie'],
            content=data['content']
        ).save()

        self.client.login(username=email, password=password)
        res = self.client.get(COMMENTS_URL, data=data)

        self.assertEquals(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data[0]['movie'], data['movie'].id)
        self.assertEqual(res.data[0]['content'], data['content'])

    def test_comments_assigned_to_movie(self):

        email = "exemple@gmail.com"
        password = "password123"
        comment1 = Comment(
            user=self.user,
            movie=self.movie,
            content='comment1'
        )
        comment2 = Comment(
            user=self.user,
            movie=self.movie,
            content='comment2'
        )
        comment1.save()
        comment2.save()

        self.client.login(username=email, password=password)
        res = self.client.get(reverse(
            'movie_comment:comments-getComments',
            args=(self.movie.id, )
        ))

        commentSer = CommentSerializer(
            [comment1, comment2],
            many=True
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertSequenceEqual(res.data, commentSer.data)
