from django.db import models
import uuid

# Register Model
class PharmacyVendorRegisterDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    work_email = models.EmailField()
    phone_number = models.CharField(max_length=13)
    organization_name = models.CharField(max_length=100)
    gstin = models.CharField(max_length=15)
    address_line1 = models.CharField(max_length=100)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)

    def __str__(self):
        return self.organization_name
    
# Add Medicine Model
class AddMedicineDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
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