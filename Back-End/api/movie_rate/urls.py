from django.urls import path, include
from rest_framework import routers
from .views import RatingViewSet, TagViewSet


router = routers.DefaultRouter()
router.register('ratings', RatingViewSet, basename="ratings")
router.register('tags', TagViewSet, basename="tags")

app_name = "movie_rate"

urlpatterns = [
    path('', include(router.urls))
]
