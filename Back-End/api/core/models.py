from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin
import re


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra):
        # to create and save a user
        if not email:
            raise ValueError("email must be provided!")
        pattern = r"[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]"
        if not re.search(pattern, email):
            raise ValueError("email not valide!")
        user = self.model(email=self.normalize_email(email), **extra)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra):
        # to create and save a user
        user = self.create_user(email=email, password=password, **extra)
        user.is_active = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    # costum user model
    email = models.EmailField(max_length=255, unique=True, null=False)
    first_name = models.CharField(max_length=255, null=False)
    last_name = models.CharField(max_length=255, null=False)
    GENDER_CHOICES = (
        ('M', "Male"),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False)
    birthday = models.DateField(null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender']

    objects = UserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

    def __str__(self):
        return self.first_name + " " + self.last_name
