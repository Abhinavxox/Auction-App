from rest_framework import serializers
from .models import Item, Auction

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class AuctionSerializer(serializers.ModelSerializer):
    item = ItemSerializer()

    class Meta:
        model = Auction
        fields = '__all__'

    def create(self, validated_data):
        item_data = validated_data.pop('item')  # Extract item data
        item_instance = Item.objects.create(**item_data)  # Create the Item object
        auction_instance = Auction.objects.create(item=item_instance, **validated_data)  # Create the Auction object
        return auction_instance
