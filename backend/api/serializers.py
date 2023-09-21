from rest_framework import serializers
from .models import Item, Auction, Bid, User
import json

class DecimalSerializer(serializers.DecimalField):
    def to_representation(self, obj):
        return str(obj)

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
        item_data = validated_data.pop('item')
        item_instance = Item.objects.create(**item_data)  
        auction_instance = Auction.objects.create(item=item_instance, **validated_data)  
        return auction_instance

    def update(self, instance, validated_data):
        item_data = validated_data.pop('item')
        item_instance = instance.item
        instance.title = validated_data.get('title', instance.title)
        instance.location = validated_data.get('location', instance.location)
        instance.auction_date = validated_data.get('auction_date', instance.auction_date)
        instance.auction_period = validated_data.get('auction_period', instance.auction_period)
        instance.lot_number = validated_data.get('lot_number', instance.lot_number)
        instance.highest_bid = validated_data.get('highest_bid', instance.highest_bid)
        instance.item = item_instance
        instance.save()
        item_instance.item_id = item_data.get('item_id', item_instance.item_id)
        item_instance.category = item_data.get('category', item_instance.category)
        item_instance.artist_name = item_data.get('artist_name', item_instance.artist_name)
        item_instance.year_produced = item_data.get('year_produced', item_instance.year_produced)
        item_instance.subject_classification = item_data.get('subject_classification', item_instance.subject_classification)
        item_instance.description = item_data.get('description', item_instance.description)
        item_instance.auction_date = item_data.get('auction_date', item_instance.auction_date)
        item_instance.estimated_price = item_data.get('estimated_price', item_instance.estimated_price)
        item_instance.category_data = item_data.get('category_data', item_instance.category_data)
        item_instance.save()
        return instance
    

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'

    def create(self, validated_data):
        auction = validated_data.get('auction')
        bid_amount = validated_data.get('bid_amount')

        try:
            auction = Auction.objects.get(id=auction.id)

            if bid_amount <= auction.highest_bid:
                raise serializers.ValidationError("Bid amount must be higher than the current highest bid.")

            existing_bids = json.loads(auction.bids) if auction.bids else []
            print(validated_data.get('bid_time'))
            new_bid = {
                'bid_amount': float(bid_amount),
                'user': validated_data.get('user').username
            }
            existing_bids.append(new_bid)
            new_bids_json = json.dumps(existing_bids)
            auction.bids = new_bids_json
            auction.highest_bid = bid_amount
            auction.save()

            return Bid.objects.create(**validated_data)
        except Auction.DoesNotExist:
            raise serializers.ValidationError("Auction does not exist.")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
