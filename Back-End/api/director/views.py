from rest_framework import viewsets
# from rest_framework import authentication
from core.models import Director
from .serializers import DirectorSerializer
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated


class DirectorViewSet(viewsets.ModelViewSet):
    # manage all tags in the database
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

    def create(self, request, *args, **kwargs):
        bio = None
        if "bio" in request.data:
            bio = request.data["bio"]
        birth_day = None
        if "birth_day" in request.data:
            birth_day = request.data["birth_day"]
        birth_place = None
        if "birth_place" in request.data:
            birth_place = request.data["birth_place"]
        image = None
        if "image" in request.data:
            image = request.data["image"]
        if Director.objects.filter(name=request.data["name"]).exists():
            return Response(
                {"Error": "director name already exists!"},
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            Director(
                name=request.data["name"],
                bio=bio,
                birth_day=birth_day,
                birth_place=birth_place,
                image=image
            ).save()
            return Response(
                {"Succes": "The director was created"},
                status=status.HTTP_201_CREATED
            )

    def list(self, request, *args, **kwargs):
        serializer = DirectorSerializer(
            self.queryset.order_by("-name"),
            many=True
        )
        return Response(serializer.data, status.HTTP_200_OK)
