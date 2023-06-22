from django.db import models
import uuid

# Pharmacy Register Model
class PharmacyVendorRegisterDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    workEmail = models.EmailField()
    phoneNumber = models.CharField(max_length=13)
    organizationName = models.CharField(max_length=100)
    gstin = models.CharField(max_length=15)
    address = models.CharField(max_length=100)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)

    def __str__(self):
        return self.organizationName
    
# Pharmacy Add Medicine Model
class AddMedicineDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    medicine_name = models.CharField(max_length=100)
    price_per_strip = models.DecimalField(max_digits=8, decimal_places=2)
    composition_name = models.CharField(max_length=100)
    tablet_per_strip = models.PositiveIntegerField()
    number_of_strips = models.PositiveIntegerField()
    manufacturer_name = models.CharField(max_length=100)
    manufacturing_date = models.DateField()
    expiry_date = models.DateField()
    
    def __str__(self):
        return self.medicine_name
    
# Pharmacy Query Model
class QueryDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField()
    feedbackType = models.CharField(max_length=20)
    describeYourFeedback = models.CharField(max_length=1000)

    def __str__(self):
        return self.feedbackType + " by " + self.userIdEmail 