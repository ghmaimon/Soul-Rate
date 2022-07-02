# Generated by Django 3.1.13 on 2021-10-03 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_auto_20210912_1606'),
    ]

    operations = [
        migrations.AlterField(
            model_name='star',
            name='bio',
            field=models.TextField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='star',
            name='birth_day',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='star',
            name='birth_place',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='star',
            name='image',
            field=models.ImageField(null=True, upload_to='images/stars'),
        ),
    ]