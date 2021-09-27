from django.urls import path, include
from rest_framework import routers
from .views import RatingViewSet


router = routers.DefaultRouter()
router.register('ratings', RatingViewSet, basename="ratings")
app_name = "movie_rate"

urlpatterns = [
    path('', include(router.urls))
]
