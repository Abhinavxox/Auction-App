from functools import wraps
import jwt
from django.http import JsonResponse
from rest_framework import status

def authenticated(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        token = request.COOKIES.get('jwt')

        storedToken = request.session.get('storage')
        if str(token) != str(storedToken):
            return JsonResponse({'error': 'Unauthenticated'}, status=status.HTTP_401_UNAUTHORIZED)

        # Call the original view function
        return view_func(request, *args, **kwargs)

    return _wrapped_view
