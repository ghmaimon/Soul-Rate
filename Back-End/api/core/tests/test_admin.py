from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse
import datetime as dt


class AdminTestCase(TestCase):

    def setUp(self):
        self.admin_user = get_user_model().objects.create_superuser(
            "admin@admin.com",
            "pass123"
        )
        self.client = Client()
        self.client.force_login(self.admin_user)
        self.user = get_user_model().objects.create_user(
            "test@test.com",
            "pass123",
            first_name="test",
            last_name="test",
            birthday=dt.datetime.now(),
            phone="06654822215",
            is_active=True
        )

    def test_user_listed(self):
        # test if users are listed on user page
        url = reverse("admin:core_user_changelist")
        res = self.client.get(url)

        self.assertContains(res, self.user.first_name)
        self.assertContains(res, self.user.last_name)
        self.assertContains(res, self.user.email)
