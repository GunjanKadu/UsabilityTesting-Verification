from calendar import timegm
from datetime import datetime

from rest_framework_jwt.settings import api_settings


def jwt_payload_handler(user):
    """ Custom payload handler
    Token encrypts the dictionary returned.
    Decoded by rest_framework_jwt.utils.jwt_decode_handler
    """
    print(user.user_roles)

    payload = {
        'user_id': str(user.id),
        'username': get_username(user),
        "userroles":{ "customer" : user.user_roles.customer,
                      "chef": user.user_roles.chef},
        'first_name': user.first_name,
        'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA,
    }

    if api_settings.JWT_ALLOW_REFRESH:
        payload['orig_iat'] = timegm(datetime.utcnow().utctimetuple())
    if api_settings.JWT_AUDIENCE is not None:
        payload['aud'] = api_settings.JWT_AUDIENCE
    if api_settings.JWT_ISSUER is not None:
        payload['iss'] = api_settings.JWT_ISSUER
    return payload


def get_username(user):
    try:
        username = user.get_username()
    except AttributeError:
        username = user.username

    return username
