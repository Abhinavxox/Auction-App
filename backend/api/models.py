from django.db import models

class Item(models.Model):
    item_id = models.CharField(max_length=8, unique=True)
    category = models.CharField(max_length=50)
    artist_name = models.CharField(max_length=255)
    year_produced = models.IntegerField()
    subject_classification = models.CharField(max_length=50)
    description = models.TextField()
    auction_date = models.DateField(null=True, blank=True)
    estimated_price = models.DecimalField(max_digits=10, decimal_places=2)
    category_data = models.JSONField(null=True, blank=True)

class Auction(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    auction_date = models.DateField()
    auction_period = models.CharField(max_length=50)
    lot_number = models.IntegerField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    highest_bid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.title

class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class Bid(models.Model):
    bid_amount = models.DecimalField(max_digits=10, decimal_places=2)
    auction = models.ForeignKey(Auction, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bid_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.bid_amount + " at " + self.bid_time