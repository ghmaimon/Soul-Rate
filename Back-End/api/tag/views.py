import re
from rest_framework import viewsets
# from rest_framework import authentication
from core.models import Tag
from tag.serializers import TagSerializer
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated


class TagViewSet(viewsets.ModelViewSet):
    # manage all tags in the database
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def create(self, request, *args, **kwargs):
        pattern = r"^(?![a-zA-Z0-9]+).*$"
        if re.search(pattern, request.data["name"]):
            return Response(
                {"Error": "Tag name is not valide!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        elif Tag.objects.filter(name=request.data["name"]).exists():
            return Response(
                {"Error": "Tag name already exists!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            Tag(name=request.data["name"]).save()
            return Response(
                {"Succes": "The tag was created"},
                status=status.HTTP_201_CREATED
            )

    def list(self, request, *args, **kwargs):
        serializer = TagSerializer(self.queryset.order_by("-name"), many=True)
        return Response(serializer.data, status.HTTP_200_OK)
