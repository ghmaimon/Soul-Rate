from rest_framework import viewsets, mixins
# from rest_framework import authentication
from core.models import Movie, Rating, Tag
from .serializers import RatingSerializer, MovieSerializer, TagSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated


class TagListViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    # manage all tags in the database
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_tags_of_movie(self, request, movieName=None):
        if movieName:
            movie = Movie.objects.get(name=movieName)
            response = {'tags': movie.tags}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': "no movie is provided"}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


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
    serializer_class = MovieSerializer

    @action(detail=False, methods=["GET"], url_path='withTag/(?P<tag>[^/.]+)')
    def withTag(self, request, tag=None):

        movies = Movie.objects.filter(tags__in=[tag, ])
        moviesSer = MovieSerializer(movies, many=True)
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
