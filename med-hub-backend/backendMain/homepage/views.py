from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import ensure_csrf_cookie



from homepage.models import OrderList
from django.http import JsonResponse
import uuid
import datetime
import jwt

secret_key = "CURE_CART_BACKEND"


# Create your views here.
@csrf_exempt
def orders(request):
    if request.method == "POST":

        token = request.headers.get("token")
        
        if not token:
            return JsonResponse({'error': 'Token not provided'})
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'})
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'})
        
      
        link = request.POST.get('link')
        quantity = request.POST.get('quantity')
        product_name = request.POST.get('title')
        price = request.POST.get('price')
        total_price = request.POST.get('total_price')
        date = datetime.date.today()
        try:
            order = OrderList(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                link = link,
                quantity=quantity,
                product_name = product_name,
                price=price,
                total_price=total_price,
                date = date
                
            )
            order.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Pharmacy details saved successfully.'})
    return JsonResponse({'error': 'Invalid request method.'})
        

