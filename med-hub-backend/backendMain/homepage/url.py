from django.urls import path
from homepage import views

urlpatterns = [
path('orderlist/', views.orders, name="Store Orderlist"),
]