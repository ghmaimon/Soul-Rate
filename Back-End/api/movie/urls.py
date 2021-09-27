from django.urls import path, include
from rest_framework import routers
from .views import MovieViewSet


router = routers.DefaultRouter()
router.register('movies', MovieViewSet, basename="movies")

app_name = "movie"

urlpatterns = [
    path('', include(router.urls))
]
