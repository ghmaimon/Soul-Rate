from rest_framework.serializers import ModelSerializer
from core.models import Comment


class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = [
            'id',
            'movie',
            'user',
            'content',
            'comment_date'
        ]

        read_only_fields = ('id',)
