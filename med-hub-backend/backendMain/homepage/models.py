from django.db import models
import uuid
import datetime
import json


# Create your models here.
class OrderList(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    date = models.DateField()
    list = models.JSONField()
    address = models.JSONField()

    

    def __str__(self):
        return self.userIdEmail