from rest_framework import serializers
from core.models import Rating, Movie, Tag


class TagSerializer(serializers.ModelSerializer):
    # Serializer for tags

    class Meta:
        model = Tag
        fields = ['id', 'name']
        read_only_fields = ('id',)


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
            'numberOfRatinfs',
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


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = [
            'id',
            'stars',
            'user',
            'movie'
        ]
