from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator,MaxValueValidator


class Movie(models.Model):

    title = models.CharField(max_length=30)
    description = models.CharField(max_length=360)

    def avrRating(self):
        ratings = Rating.objects.filter(movie=self)
        temp = 0
        for r in ratings:
            temp+=r.stars
        if len(ratings)==0:
            return 0
        else:
            return temp/len(ratings)

    def ratingsByUsers(self):
        ratings = Rating.objects.filter(movie=self)
        temp = {}
        for rating in ratings:
            temp[f'{rating.user}'] = rating.stars
        return temp

    def numberOfRatinfs(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def __str__(self):
        return self.title

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='ratings')
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    class Meta:
        unique_together = (('user','movie'),)
        index_together = (('user','movie'),)
