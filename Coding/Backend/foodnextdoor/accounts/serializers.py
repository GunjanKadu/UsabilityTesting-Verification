from django.contrib.auth import authenticate, get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_email_auth.models import EmailAddress
from rest_email_auth.serializers import RegistrationSerializer
from rest_framework_jwt.serializers import JSONWebTokenSerializer
from rest_framework import serializers
from .exceptions import EmailUnverified
from .models import User
from rest_framework_jwt.settings import api_settings
from rest_auth.serializers import UserDetailsSerializer

User = get_user_model()
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER
jwt_get_username_from_payload = api_settings.JWT_PAYLOAD_GET_USERNAME_HANDLER


class CustomRegistrationSerializer(RegistrationSerializer):
    class Meta:
        # You must include the 'email' field for the serializer to work.
        fields = (
            User.USERNAME_FIELD,
            'password',
            'first_name',
        )
        model = User
        extra_kwargs = {'password': {'write_only': True}}


class LoginSerializer(JSONWebTokenSerializer):
    """
    Serializer to login
    Override validate to check email verification
    """

    def validate(self, attrs):
        credentials = {
            self.username_field: attrs.get(self.username_field),
            'password': attrs.get('password')
        }

        if all(credentials.values()):
            email = credentials['email']
            try:
                entered_email = EmailAddress.objects.get(email=email)
                if not entered_email.is_verified:
                    raise EmailUnverified
            except ObjectDoesNotExist:
                msg = 'Invalid Credentials or Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg)
            user = authenticate(**credentials)

            if user:
                if not user.is_active:
                    msg = 'User account is disabled.'
                    raise serializers.ValidationError(msg)

                payload = jwt_payload_handler(user)
                return {
                    'token': jwt_encode_handler(payload),
                    'user': user
                }
            else:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg)
        else:
            msg = 'Must include "{username_field}" and "password".'
            msg = msg.format(username_field=self.username_field)
            raise serializers.ValidationError(msg)


class CustomUserDetailsSerializer(UserDetailsSerializer):
    class Meta:
        read_only_fields = ('email',)
        model = get_user_model()
        fields = ('pk', 'email', 'first_name', 'last_name')
