from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
# from rest_framework import authentication
from core.models import Movie
from .serializers import MovieDetailSerializer, MovieListSerializer
from rest_framework.response import Response
from rest_framework import status


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

    @action(detail=False, methods=["GET"], url_path='with_tag/(?P<tag>[^/.]+)')
    def withTag(self, request, tag=None):
        # retrieve movies with a given tag
        movies = Movie.objects.filter(tags__in=[tag, ])
        moviesSer = MovieListSerializer(movies, many=True)
        return Response(moviesSer.data, status.HTTP_200_OK)
