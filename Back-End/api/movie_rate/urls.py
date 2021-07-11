from django.urls import path, include
from rest_framework import routers
from .views import MovieViewSet, RatingViewSet, TagListViewSet


router = routers.DefaultRouter()
router.register('movies', MovieViewSet, basename="movies")
router.register('ratings', RatingViewSet)
router.register('tags', TagListViewSet, basename="tags")

app_name = "movie_rate"

urlpatterns = [
    path('', include(router.urls))
]
