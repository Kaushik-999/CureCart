from django.contrib import admin
from pharmacyVendor.models import PharmacyVendorRegisterDB, AddMedicineDB, QueryDB

# Register your models here.
admin.site.register(PharmacyVendorRegisterDB)
admin.site.register(AddMedicineDB)
admin.site.register(QueryDB)
