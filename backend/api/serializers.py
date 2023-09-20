from rest_framework import serializers
from .models import Item, Drawing, Painting, PhotographicImage, Sculpture, Carving

class DrawingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drawing
        fields = '__all__'

class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = '__all__'

class PhotographicImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotographicImage
        fields = '__all__'

class SculptureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sculpture
        fields = '__all__'

class CarvingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carving
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    drawing = DrawingSerializer(read_only=True)
    painting = PaintingSerializer(read_only=True)
    photographic_image = PhotographicImageSerializer(read_only=True)
    sculpture = SculptureSerializer(read_only=True)
    carving = CarvingSerializer(read_only=True)

    class Meta:
        model = Item
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        category = data.get('category')

        # Define a dictionary to map categories to serializers
        category_serializer_mapping = {
            'Drawing': DrawingSerializer,
            'Painting': PaintingSerializer,
            'Photographic Image': PhotographicImageSerializer,
            'Sculpture': SculptureSerializer,
            'Carving': CarvingSerializer,
        }

        # Use the mapping to set the appropriate serializer and set other fields to None
        for category_key, serializer_class in category_serializer_mapping.items():
            if category == category_key:
                related_object = getattr(instance, category_key.lower().replace(" ", "_"), None)
                if related_object:
                    data[category_key.lower().replace(" ", "_")] = serializer_class(related_object).data
                else:
                    data[category_key.lower().replace(" ", "_")] = None
            else:
                data[category_key.lower().replace(" ", "_")] = None

        return data

