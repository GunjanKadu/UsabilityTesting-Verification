from django.shortcuts import render

# Create your views here.
from rest_framework_jwt.views import ObtainJSONWebToken
from .serializers import LoginSerializer, CustomUserDetailsSerializer
from rest_auth.views import UserDetailsView


class EmailVerifiedLoginView(ObtainJSONWebToken):
    """
    Returns JWT token for successful login
    """
    serializer_class = LoginSerializer


class CustomUserDetailsView(UserDetailsView):
    serializer_class = CustomUserDetailsSerializer
