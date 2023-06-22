from django.urls import path
from bloodBank import views

urlpatterns = [ 
    #  Become Member | BloodBank |endpoint : blood-bank/become-member/
    path('become-member/', views.becomeMember, name="bloodBank - become member"),
    
     #  Become Donor | BloodBank |endpoint : blood-bank/become-donor/
    path('become-donor/', views.becomeDonor, name="bloodBank - become donor"),
]
