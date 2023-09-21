from django.urls import path 
from api import views 

urlpatterns = [
    path('items/', views.item_list),
    path('auctions/', views.auction_list),
    path('users/', views.users_list),
    path('bids/', views.bid_list),
    path('auctions/<int:pk>/', views.auction_details),
    path('login/', views.login),
    path('register/', views.register),
    path('logout/', views.logout),
]
