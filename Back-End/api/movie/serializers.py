from rest_framework import serializers
from core.models import Movie
from django.core.files import File
import base64


class MovieDetailSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)
    stars = serializers.StringRelatedField(many=True)
    directors = serializers.StringRelatedField(many=True)
    base64_image = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'description',
            'ratingsByUsers',
            'avrRating',
            'numberOfRatings',
            'base64_image',
            'tags',
            'stars',
            'directors',
            'comments'
        ]
    
    def get_base64_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data


class MovieListSerializer(serializers.ModelSerializer):
    base64_image = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'description',
            'base64_image',
        ]

    def get_base64_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data
