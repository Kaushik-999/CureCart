from django.contrib import admin

# Register your models here.
from bloodBank.models import BloodBankMembersDB, BloodBankDonorDB

# Register your models here.
admin.site.register(BloodBankMembersDB)
admin.site.register(BloodBankDonorDB)