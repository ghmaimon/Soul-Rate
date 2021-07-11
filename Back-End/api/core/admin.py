from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from django.utils.translation import gettext as _
from .models import Rating, Movie, Tag, User

admin.site.register(Rating)
admin.site.register(Movie)
admin.site.register(Tag)


class UserAdmin(BaseUserAdmin):
    ordering = ('id',)
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
                )
            }
        ),
    )


admin.site.unregister(Group)
admin.site.register(User, UserAdmin)
