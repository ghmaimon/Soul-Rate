# Generated by Django 3.1.10 on 2021-05-11 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie_rate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='description',
            field=models.TextField(max_length=1023),
        ),
    ]
