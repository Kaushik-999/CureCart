from django.contrib import admin

# Register your models here.
from bloodBank.models import BloodBankMembersDB, BloodBankDonorDB, AppointmentDB

# Register your models here.
admin.site.register(BloodBankMembersDB)
admin.site.register(BloodBankDonorDB)
admin.site.register(AppointmentDB)