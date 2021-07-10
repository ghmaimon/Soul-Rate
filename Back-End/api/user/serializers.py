from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _
from core.models import User


class UserSerializer(serializers.ModelSerializer):

    QuerySet = User.objects.all()

    def create(self, validated_data):
        # create a user:
        user = get_user_model().objects.create_user(**validated_data)
        return user

    class Meta:
        model = get_user_model()
        fields = (
            'email',
            'first_name',
            'last_name',
            'password',
            'gender',
            'birthday',
        )
        extra_kwargs = {
            'password': {
                'write_only': True,
                'min_length': 6,
            }
        }


class AuthTokenSerializer(serializers.Serializer):
    # serializer for the user autentication token
    email = serializers.EmailField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        # validate and authenticate user
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )

        if not user:
            msg = _("Unable to authenticate with provided credentials!!")
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user

        return attrs
