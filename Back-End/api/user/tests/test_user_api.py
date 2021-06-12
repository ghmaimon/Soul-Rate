from django.contrib.auth import get_user_model
from django.urls import reverse
import datetime

from rest_framework.test import APIClient, APITestCase
from rest_framework import status

CREATE_USER_URL = reverse('user:create')
TOKEN_URL = reverse('user:token')


def create_user(**params):
    return get_user_model().objects.create_user(**params)


class CreateUserApiTestCase(APITestCase):
    # tests for creating a user:

    def setUp(self):
        self.client = APIClient()
        return super().setUp()

    def test_create_user_with_valide_info(self):
        # test if creating a user with valide information is successful
        info = {
            'email': 'test123@gmail.com',
            'first_name': 'test_f',
            'last_name': 'test_l',
            'gender': 'M',
            'birthday': datetime.date(1998, 12, 5),
            'password': 'test123'
        }

        res = self.client.post(CREATE_USER_URL, info)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        user = get_user_model().objects.get(**res.data)
        self.assertEqual(user.email, info['email'])
        self.assertTrue(user.check_password(info['password']))

    def test_create_user_exits(self):
        # test if creating a user that already exits will fail
        info = {
            'email': 'test123@gmail.com',
            'first_name': 'test_f',
            'last_name': 'test_l',
            'gender': 'M',
            'birthday': datetime.date(1998, 12, 5),
            'password': 'test123'
        }
        create_user(**info)
        res = self.client.post(CREATE_USER_URL, info)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_password_is_short(self):
        info = {
            'email': 'test123@gmail.com',
            'first_name': 'test_f',
            'last_name': 'test_l',
            'gender': 'M',
            'birthday': datetime.date(1998, 12, 5),
            'password': 'te'
        }
        res = self.client.post(CREATE_USER_URL, info)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

        user_created = get_user_model().objects.filter(
            email=info['email']
        ).exists()

        self.assertFalse(user_created)


class CreateTokenApiTestCase(APITestCase):
    # tests for creating a token

    def setUp(self):
        self.client = APIClient()
        return super().setUp()

    def test_create_token_for_user(self):
        # test if a token is created successfully
        info = {
            'email': 'test1@gmail.com',
            'first_name': 'test_f',
            'last_name': 'test_l',
            'gender': 'M',
            'birthday': datetime.date(1998, 12, 5),
            'password': 'test123'
        }

        create_user(**info)

        res = self.client.post(TOKEN_URL, info)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIn('token', res.data)

    def test_create_token_invalide_credentials(self):
        # test must not pass if credentials are invalides
        info = {
            'email': 'test2@gmail.com',
            'first_name': 'test_f',
            'last_name': 'test_l',
            'gender': 'M',
            'birthday': datetime.date(1998, 12, 5),
            'password': 'test123'
        }
        invalide_info = {
            'email': 'test2@gmail.com',
            'password': 'test1234',  # wrong password
        }

        create_user(**info)
        res = self.client.post(TOKEN_URL, invalide_info)

        self.assertNotIn('token', res.data)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_token_without_user(self):
        # token must not be created if user doesn't exist
        invalide_info = {
            'email': 'test3@gmail.com',  # user does not exist
            'password': 'test1234',
        }

        res = self.client.post(TOKEN_URL, invalide_info)

        self.assertNotIn('token', res.data)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_token_missing_fields(self):
        # if fields are missing token must not be created
        invalide_info = {
            'email': 'test4@gmail.com',  # user does not exist
            'password': '',
        }

        res = self.client.post(TOKEN_URL, invalide_info)

        self.assertNotIn('token', res.data)
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
