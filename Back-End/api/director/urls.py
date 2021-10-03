from django.urls import path, include
from rest_framework import routers
from .views import DirectorViewSet


router = routers.DefaultRouter()
router.register('directors', DirectorViewSet, basename="directors")

app_name = "director"

urlpatterns = [
    path('', include(router.urls))
]
