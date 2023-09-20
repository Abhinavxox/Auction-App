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

class Drawing(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    drawing_medium = models.CharField(max_length=50)
    is_framed = models.BooleanField(default=False)
    height_cm = models.DecimalField(max_digits=5, decimal_places=2)
    length_cm = models.DecimalField(max_digits=5, decimal_places=2)

class Painting(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    painting_medium = models.CharField(max_length=50)
    is_framed = models.BooleanField(default=False)
    height_cm = models.DecimalField(max_digits=5, decimal_places=2)
    length_cm = models.DecimalField(max_digits=5, decimal_places=2)

class PhotographicImage(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    image_type = models.CharField(max_length=50)
    height_cm = models.DecimalField(max_digits=5, decimal_places=2)
    length_cm = models.DecimalField(max_digits=5, decimal_places=2)

class Sculpture(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    material_used = models.CharField(max_length=50)
    height_cm = models.DecimalField(max_digits=5, decimal_places=2)
    length_cm = models.DecimalField(max_digits=5, decimal_places=2)
    width_cm = models.DecimalField(max_digits=5, decimal_places=2)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2)

class Carving(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    material_used = models.CharField(max_length=50)
    height_cm = models.DecimalField(max_digits=5, decimal_places=2)
    length_cm = models.DecimalField(max_digits=5, decimal_places=2)
    width_cm = models.DecimalField(max_digits=5, decimal_places=2)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2)
