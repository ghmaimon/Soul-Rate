from django.urls import path
from .views import CreateUserView, CreateTokenView, ListUsersView

app_name = 'user'

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create'),
    path('token/', CreateTokenView.as_view(), name='token'),
    path('', ListUsersView.as_view(), name="listUsers"),
]
