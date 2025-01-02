from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.Serializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pass', 'vot_to_skip', 'crated_at')

