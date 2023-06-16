from django.urls import path
from pharmacyVendor import views
 
urlpatterns = [
    #  Register |Pharmacy Vendor | endpoint : pharmacy-vendor/register/
    path('register/', views.pharmacyVendorRegister, name="Pharmacy Vendor Registration"),

    #  Add Medicine |Pharmacy Vendor | endpoint : pharmacy-vendor/add-medicine/
    path('add-medicine/', views.pharmacyVendorAddMedicine, name="Pharmacy Vendor Add Medicine"),

    #  Query Form |Pharmacy Vendor | endpoint : pharmacy-vendor/query/
    path('query/', views.pharmacyQuery, name="Pharmacy Query"),
    
    #  Get all Invoice to "certain user" |Pharmacy Vendor | endpoint : pharmacy-vendor/get-all-invoices/
    path('get-all-invoices/', views.getAllInvoices, name="Pharmacy Get All Invoice"),

    #  Get Dashboard Data |Pharmacy Vendor | endpoint : pharmacy-vendor/get-dashboard-data/
    path('get-dashboard-data/', views.getDashboardData, name="Pharmacy Dashboard Data"),
]