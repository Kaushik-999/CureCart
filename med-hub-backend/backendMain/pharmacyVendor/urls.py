from django.urls import path
from pharmacyVendor import views
 
urlpatterns = [
    #  Register |Pharmacy Vendor | endpoint : pharmacy-vendor/register/
    path('register/', views.pharmacyVendorRegister, name="Pharmacy Vendor Registration"),

    #  Add Medicine |Pharmacy Vendor | endpoint : pharmacy-vendor/add-medicine/
    path('add-medicine/', views.pharmacyVendorAddMedicine, name="Pharmacy Vendor Add Medicine"),

    #  Add Medicine |Pharmacy Vendor | endpoint : pharmacy-vendor/query/
    path('query/', views.pharmacyQuery, name="Pharmacy Query"),
]