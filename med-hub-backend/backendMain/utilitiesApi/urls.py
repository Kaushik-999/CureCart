from django.urls import path
from utilitiesApi import views
 
urlpatterns = [
    #  Add Invoice | Utilties | endpoint : utilities/add-invoice/
    path('add-invoice/', views.addInvoice, name="Add Voice"),

]