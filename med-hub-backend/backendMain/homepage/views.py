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
            return JsonResponse({'error': 'Token not provided',},status=500)
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'},status=500)
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'},status=500)
        
      
        body = json.loads(request.body)
        list = body['list']
        formData = body['formData']
        
        # address = request.POST.get('address')
        # product_name = request.POST.get('title')
        # price = request.POST.get('price')
        # total_price = request.POST.get('total_price')
        date = datetime.date.today()

        for it in list : 
            it['date']  = str(date)
            print(it)
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
            return JsonResponse({'error': 'Error occurred while saving the data.'},status=500)
        else:
            return JsonResponse({'success': 'OrderList Stored Successfully'},status=200)
    return JsonResponse({'error': 'Invalid request method.'},status=500)
        

@csrf_exempt
def getOrders(request):
    if request.method == "GET":
        token = request.headers.get("token")
        
        if not token:
            return JsonResponse({'error': 'Token not provided',},status=500)
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'},status=500)
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'},status=500)
        
        try:
             en_lists = OrderList.objects.all()
             print(en_lists)
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving medslist.'},status = 500)
        else:
            data =[]
            
            for l in en_lists:
                data.append(
                    {
                        'list' : json.loads(l.list) ,
                        'date'  : l.date,
                        'address' : json.loads(l.address)
                        
                    }
                )
            print(data)
            return JsonResponse({'success': 'Meds retrived successfully.','orders':data},status = 200, safe=False)


