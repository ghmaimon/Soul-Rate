from django.urls import path, include
from rest_framework import routers
from .views import TagViewSet


router = routers.DefaultRouter()
router.register('tags', TagViewSet, basename="tags")

app_name = "tag"

urlpatterns = [
    path('', include(router.urls))
]
