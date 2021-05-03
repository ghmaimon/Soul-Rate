from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra):
        # to create and save a user
        user = self.model(email=self.normalize_email(email), **extra)
        user.set_password(password)
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    # costum user model
    email = models.EmailField(max_length=255, unique=True)
    firstname = models.CharField(max_length=50, null=True, blank=False)
    lastname = models.CharField(max_length=50, null=True, blank=False)
    middlename = models.CharField(max_length=50, null=True)
    birthday = models.DateField(null=True, blank=False)
    phone = models.CharField(max_length=15, null=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    password = models.CharField(max_length=50)

    objects = UserManager()

    USERNAME_FIELD = 'email'
