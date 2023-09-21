from functools import wraps
from rest_framework.exceptions import AuthenticationFailed
import jwt
from django.http import JsonResponse
from rest_framework import status
import pickle


def authenticated(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        token = request.COOKIES.get('jwt')

        if not token:
            return JsonResponse({'error': 'Please provide the token'}, status=status.HTTP_403_FORBIDDEN)
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=["HS256"])
            # You can access payload data here if needed
            print(payload)

        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token expired'}, status=status.HTTP_403_FORBIDDEN)
        
        except jwt.DecodeError:
            return JsonResponse({'error': 'Token invalid'}, status=status.HTTP_403_FORBIDDEN)

        # Call the original view function
        return view_func(request, *args, **kwargs)

    return _wrapped_view
