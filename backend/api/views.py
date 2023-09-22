from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Item, Auction , User, Bid
from .serializers import ItemSerializer, AuctionSerializer, UserSerializer, BidSerializer
import jwt
import datetime
from rest_framework.exceptions import AuthenticationFailed
from .decorators import authenticated

@api_view(['GET', 'POST'])
def item_list(request):
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
def auction_list(request):
    if request.method == 'GET':
        auctions = Auction.objects.all()
        serializer = AuctionSerializer(auctions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AuctionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'PUT', 'DELETE'])
def auction_details(request, pk):
    try:
        auction = Auction.objects.get(pk=pk)
    except Auction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AuctionSerializer(auction)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # Assuming your request has a JSON body with a field 'ended' containing the new value
        new_ended = request.data.get('ended', None)
        if new_ended is not None:
            auction.ended = new_ended
            auction.save()
            return Response(status=status.HTTP_204_NO_CONTENT, data={'message': 'Auction ended successfully'})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'The "ended" field must be provided in the request body'})

    elif request.method == 'DELETE':
        auction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AuctionSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AuctionSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST', 'DELETE'])
def bid_list(request):
    if request.method == 'GET':
        bids = Bid.objects.all()
        serializer = BidSerializer(bids, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        bid = 0.00
        if type(request.data.get('bid_amount')) == str:
            bid = round(float(request.data.get('bid_amount')), 2)
        if bid <= Auction.objects.get(id=request.data.get('auction')).highest_bid:
            return JsonResponse({'message': 'Bid amount must be higher than current highest bid.'}, status=status.HTTP_400_BAD_REQUEST)
        data ={
            'auction': request.data.get('auction'),
            'bid_amount': bid,
            'user': request.data.get('user')
        }
        serializer = BidSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        bids = Bid.objects.all()
        bids.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found:)')
            
        if not user.check_password(password):
            raise AuthenticationFailed('Invalid password')

       
        payload = {
            "id": user.id,
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response() 

        response.set_cookie(key='jwt', value=token, httponly=True)  #httonly - frontend can't access cookie, only for backend
        request.session['storage'] = str(token)
        request.session.save()
        response.data = {
            "id": user.id,
            "email": user.email,
            "name": user.name,
            'jwt token': token
        }

        #if password correct
        return response
        
        
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)   
        serializer.save()
        return Response(serializer.data)
    
@api_view(['POST'])
def logout (request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'successful'
    }

    return response

@api_view(['POST'])
def my_auctions (request):
    if request.method == 'POST':
        user_id = request.data['user_id']
        auctions = Auction.objects.filter(user_id=user_id)
        serializer = AuctionSerializer(auctions, many=True)
        return Response(serializer.data)