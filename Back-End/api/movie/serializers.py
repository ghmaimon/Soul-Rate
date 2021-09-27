from rest_framework import serializers
from core.models import Movie


class MovieDetailSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'description',
            'ratingsByUsers',
            'avrRating',
            'numberOfRatings',
            'image',
            'tags'
        ]


class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'image',
        ]
