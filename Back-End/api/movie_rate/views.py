import re
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
# from rest_framework import authentication
from core.models import Movie, Rating, Tag
from .serializers import RatingSerializer, \
    MovieDetailSerializer, MovieListSerializer, TagSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
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


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def update(self, request, *args, **kwargs):
        response = {'message': 'you cannot update like this'}
        return Response(response, status=status.HTTP_401_UNAUTHORIZED)

    def create(self, request, *args, **kwargs):
        response = {'message': 'you cannot create like this'}
        return Response(response, status=status.HTTP_401_UNAUTHORIZED)


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieListSerializer

    def list(self, request, *args, **kwargs):
        serializer = MovieListSerializer(self.queryset, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

    def retrieve(self, request, pk=None, *args, **kwargs):
        movie = get_object_or_404(self.queryset, pk=pk)
        serializer = MovieDetailSerializer(movie)
        return Response(serializer.data, status.HTTP_200_OK)

    @action(detail=False, methods=["GET"], url_path='withTag/(?P<tag>[^/.]+)')
    def withTag(self, request, tag=None):
        # retrieve movies with a given tag
        movies = Movie.objects.filter(tags__in=[tag, ])
        moviesSer = MovieListSerializer(movies, many=True)
        return Response(moviesSer.data, status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def rate_movie(self, request, pk=None):
        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            stars = request.data["stars"]
            user = request.user
            try:
                rating = Rating.objects.get(movie=movie, user=user)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {
                    'message': 'rating updated!!',
                    'result': serializer.data
                }
                return Response(response, status=status.HTTP_200_OK)
            except Rating.DoesNotExist:
                rating = Rating.objects.create(
                    movie=movie,
                    user=user,
                    stars=stars
                )
                serializer = RatingSerializer(rating, many=False)
                response = {
                    'message': 'rating created!!',
                    'result': serializer.data
                }
                return Response(response, status=status.HTTP_200_OK)
        else:
            return Response(
                {"message": "error"},
                status=status.HTTP_404_NOT_FOUND
            )
