from django.contrib import admin
from .models import Item, Auction, Bid, User

admin.site.register(Item)
admin.site.register(Auction)
admin.site.register(Bid)
admin.site.register(User)