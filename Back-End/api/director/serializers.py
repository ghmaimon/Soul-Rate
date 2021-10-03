from rest_framework import serializers
from core.models import Director


class DirectorSerializer(serializers.ModelSerializer):
    # Serializer for tags
    QuerySet = Director.objects.all()

    class Meta:
        model = Director
        fields = [
            'id',
            'name',
            'bio',
            'birth_day',
            'birth_place',
            'image'
        ]
        read_only_fields = ('id',)
