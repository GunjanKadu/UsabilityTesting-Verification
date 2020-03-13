from django.urls import include, path
from .views import EmailVerifiedLoginView, CustomUserDetailsView

urlpatterns = [
    path('login/', EmailVerifiedLoginView.as_view(), name='login'),
    # rest_email_auth
    path('', include('rest_email_auth.urls')),
    path('profile/', CustomUserDetailsView.as_view()),
]
