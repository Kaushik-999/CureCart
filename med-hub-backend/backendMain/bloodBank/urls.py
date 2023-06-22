from django.urls import path
from bloodBank import views

urlpatterns = [ 
    #  Become Member | BloodBank |endpoint : blood-bank/become-member/
    path('become-member/', views.becomeMember, name="bloodBank - become member"),
    
    #  Become Donor | BloodBank |endpoint : blood-bank/become-donor/
    path('become-donor/', views.becomeDonor, name="bloodBank - become donor"),
     
    #  Get Blood Details | BloodBank |endpoint : blood-bank/get-blood-details/
    path('get-blood-details/', views.getBloodDetails, name="bloodBank - blood details"),

    #  Get Donor Details | BloodBank |endpoint : blood-bank/get-donor-details/
    path('get-donor-details/', views.getDonorDetails, name="bloodBank - donor details"),
]
