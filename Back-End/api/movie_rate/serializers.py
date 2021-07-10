from rest_framework import serializers
from core.models import Rating, Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'description',
            'ratingsByUsers',
            'avrRating',
            'numberOfRatinfs',
            'image'
        ]


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = [
            'id',
            'stars',
            'user',
            'movie'
        ]
