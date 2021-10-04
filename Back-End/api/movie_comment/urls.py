from django.urls import path, include
from .views import CommentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("comments", CommentViewSet, basename="comments")
app_name = 'movie_comment'

urlpatterns = [
    path('', include(router.urls)),
]
