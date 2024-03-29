from django.urls import path, include
from rest_framework import routers
from .views import StarViewSet


router = routers.DefaultRouter()
router.register('stars', StarViewSet, basename="stars")

app_name = "star"

urlpatterns = [
    path('', include(router.urls))
]
