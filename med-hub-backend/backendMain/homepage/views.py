from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import ensure_csrf_cookie



from homepage.models import OrderList
from django.http import JsonResponse
import uuid
import datetime
import jwt
import json

secret_key = "CURE_CART_BACKEND"


# Create your views here.
@csrf_exempt
def orders(request):
    if request.method == "POST":

        token = request.headers.get("token")
        
        if not token:
            return JsonResponse({'error': 'Token not provided',})
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'})
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'})
        
      
        body = json.loads(request.body)
        list = body['list']
        formData = body['formData']
        
        # address = request.POST.get('address')
        # product_name = request.POST.get('title')
        # price = request.POST.get('price')
        # total_price = request.POST.get('total_price')
        date = datetime.date.today()
        try:
            order = OrderList(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                date = date,
                
                list = json.dumps(list),
                address = json.dumps(formData)
                
                
                
            )
            order.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'OrderList Stored Successfully'})
    return JsonResponse({'error': 'Invalid request method.'})
        

@csrf_exempt
def getOrders(request):
    if request.method == "GET":
        token = request.headers.get("token")
        
        if not token:
            return JsonResponse({'error': 'Token not provided',})
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'})
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'})
        
        try:
             en_lists = OrderList.objects.all()
             print(en_lists)
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving medslist.'})
        else:
            data =[]
            
            for l in en_lists:
                data.append(
                    {
                        'list' : json.loads(l.list) ,
                        'formData' : json.loads(l.address)
                    }
                )
            print(data)
            return JsonResponse({'success': 'Meds retrived successfully.','orders':data}, safe=False)


