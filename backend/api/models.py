from django.db import models

# to creat random code
import random
import string

def generate_unique_code():
    lenght = 8
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=lenght))
        if not Room.objects.filter(code=code).count() == 0:
            break
    return code

class Room(models.Model):
    code = models.CharField(max_length=10, default='', unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pass = models.BooleanField(default= False , null=False)
    vot_to_skip = models.BooleanField(default= 1 , null=False)
    crated_at = models.DateTimeField(auto_now_add=True)
