from rest_framework import viewsets
from rest_framework.decorators import action
from core.models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework import status


class CommentViewSet(viewsets.ModelViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):

        if(request.data["content"] == ""):
            return Response(
                {'Error': "Empty comment not allowed!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            Comment(
                user=request.user,
                content=request.data["content"],
                movie=request.data["movie"],
            ).save()
            return Response(
                {"Succes": "Comment Created!"},
                status=status.HTTP_201_CREATED
            )

    @action(
        detail=False,
        methods=["GET"],
        url_path='get_comments/(?P<movie>[^/.]+)'
        )
    def getComments(self, request, movie=None):
        # retrieve movies with a given tag
        comments = Comment.objects.filter(movie=movie)
        commentSer = CommentSerializer(comments, many=True)
        return Response(commentSer.data, status.HTTP_200_OK)
