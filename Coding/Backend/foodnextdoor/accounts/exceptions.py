from rest_framework import status
from rest_framework.exceptions import APIException


class EmailUnverified(APIException):
    """
    Error code : 403, for unverified email
    """
    status_code = status.HTTP_403_FORBIDDEN
    default_detail = 'User email address is not verified.'
    default_code = 'email_not_verified'
