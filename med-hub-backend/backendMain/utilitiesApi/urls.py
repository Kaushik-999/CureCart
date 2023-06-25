from django.urls import path
from utilitiesApi import views
 
urlpatterns = [
    #  Add Invoice | Utilties | endpoint : utilities/add-invoice/
    path('add-invoice/', views.addInvoice, name="Add Voice"),

    #  Addd Blood All | Utilties | endpoint : utilities/add-all-blood/
    path('add-all-blood/', views.addAllBlood, name="Add Voice"),

]