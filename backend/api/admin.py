from django.contrib import admin
from .models import Item, Drawing, Painting, PhotographicImage, Sculpture, Carving

admin.site.register(Item)
admin.site.register(Drawing)
admin.site.register(Painting)
admin.site.register(PhotographicImage)
admin.site.register(Sculpture)
admin.site.register(Carving)

