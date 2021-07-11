from django.urls import path, include
from rest_framework import routers
from .views import MovieViewSet, RatingViewSet, TagViewSet


router = routers.DefaultRouter()
router.register('movies', MovieViewSet, basename="movies")
router.register('ratings', RatingViewSet)
router.register('tags', TagViewSet, basename="tags")

app_name = "movie_rate"

urlpatterns = [
    path('', include(router.urls))
]
