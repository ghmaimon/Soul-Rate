from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from core import models
from django.utils.translation import gettext as _


class UserAdmin(BaseUserAdmin):
    ordering = ('id', )
    list_display = ('email', 'first_name', 'last_name', 'gender', )
    list_filter = ('is_active', 'is_staff', 'is_superuser', 'gender', )
    search_fields = ('email', )
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (
            _('Personal Information'),
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'gender',
                    'birthday',
                    'phone',
                    'address',
                )
            }
        ),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (
            _('Important events'),
            {
                'fields': (
                    'last_login',
                )
            }
        )
    )
    add_fieldsets = (
        (None, {
                'fields': ('email', 'password1', 'password2'),
                'classes': ('wide', )
        }),
        (
            _('Personal Information'),
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'gender',
                    'birthday',
                    'phone',
                    'address',
                )
            }
        ),
    )


admin.site.unregister(Group)
admin.site.register(models.User, UserAdmin)
