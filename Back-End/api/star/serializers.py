from rest_framework import serializers
from core.models import Star


class StarSerializer(serializers.ModelSerializer):
    # Serializer for tags
    QuerySet = Star.objects.all()

    class Meta:
        model = Star
        fields = [
            'id',
            'name',
            'bio',
            'birth_day',
            'birth_place',
            'image'
        ]
        read_only_fields = ('id',)
