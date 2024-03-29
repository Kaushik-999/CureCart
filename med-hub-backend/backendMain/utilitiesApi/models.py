from django.db import models
import uuid
 
# Invoice Utilities Model
class InvoiceDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    date = models.DateField()
    product = models.CharField(max_length=50)
    payement = models.CharField(max_length=50)
    delivery = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=5,decimal_places=2)

    def __str__(self):
        return self.userIdEmail

# Blood Units Model
class BloodDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    date = models.DateField()
    bloodType = models.CharField(max_length=3, choices=(
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ))
    unitsAvailable = models.CharField(max_length=5)

    def __str__(self):
        return self.bloodType + " --- " + self.unitsAvailable
 