# Generated by Django 3.1.13 on 2021-07-10 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie_rate', '0002_auto_20210511_1153'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='image',
            field=models.ImageField(blank=True, upload_to='movies'),
        ),
    ]