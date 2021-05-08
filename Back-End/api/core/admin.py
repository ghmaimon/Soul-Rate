from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from core import models


class UserAdmin(BaseUserAdmin):
    ordering = ("id", )
    list_display = ("email", "first_name", "last_name", "gender", )
    list_filter = ('is_active', 'is_staff', 'is_superuser', 'gender', )
    search_fields = ('email', )


admin.site.unregister(Group)
admin.site.register(models.User, UserAdmin)
