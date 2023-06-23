from django.db import models
import uuid
import datetime

# Create your models here.
class OrderList(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    link = models.CharField(max_length=50)
    product_name = models.CharField(max_length=60)
    quantity = models.IntegerField()
    price = models.DecimalField(decimal_places=2,max_digits=100)
    total_price = models.DecimalField(decimal_places=2,max_digits=100)
    date = models.DateField()
    

    def __str__(self):
        return self.product_name