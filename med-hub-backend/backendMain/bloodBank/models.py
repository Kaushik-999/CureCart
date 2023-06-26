from django.db import models
import uuid
# Create your models here.

# BloodBank Become Member Model
class BloodBankMembersDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField() # foreign key
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=13)
    organization = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    operatingCity = models.CharField(max_length=50)

    def __str__(self):
        return self.name + " from " +  self.operatingCity

# BloodBank Become Donar Model
class BloodBankDonorDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField() # foreign key
    name = models.CharField(max_length=50)
    email = models.EmailField()
    bloodGroup = models.CharField(max_length=5)
    dateOfBirth = models.DateField()
    age = models.CharField(max_length=3)
    phone = models.CharField(max_length=13)
    organization = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    operatingCity = models.CharField(max_length=50)

    def __str__(self):
        return self.name + " ---  " +  self.bloodGroup


# BloodBank - Request Appoimentment Model
class AppointmentDB(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userIdEmail = models.EmailField() # foreign key
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
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
    date = models.DateField()
    time = models.CharField(max_length=30)
    message = models.CharField(max_length=500)

    def __str__(self):
        return self.name + " --- "+ self.email