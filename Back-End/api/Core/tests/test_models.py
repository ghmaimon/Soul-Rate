from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user_email(self):
        # test the result of creating a user with email
        email = "username@something.com"
        password = "Pass1234"
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_create_user_normalized_email(self):
        # test the normalization of the email
        email = "username@SOMETHING.COM"
        password = "Pass1234"
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )
        self.assertEqual(user.email, email.lower())
        self.assertTrue(user.check_password(password))

    def test_email_invalide(self):
        # test if the email provided is invalide
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, r".*")

    def test_create_superuser(self):
        # test if user created is a superuser
        user = get_user_model().objects.create_superuser(
            "something@something.com",
            "password@password"
        )
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
