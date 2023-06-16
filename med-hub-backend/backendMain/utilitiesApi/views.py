import json
from django.http import JsonResponse
from utilitiesApi.models import InvoiceDB
from django.views.decorators.csrf import csrf_exempt
from datetime import date
import uuid


# Adding Invoice View | For Development | New "add invoice function" will be created by G-DAS
@csrf_exempt
def addInvoice(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)

        product = data.get('product')
        payement = data.get('payment')
        delivery = data.get('delivery')
        date = data.get('date')
        amount = data.get('amount')
        category = data.get('category')
        
        if None in [product, payement, delivery, amount,category]:
            return JsonResponse({"error":"All fields are required"})
        
        try:
            invoice = InvoiceDB(
                id = str(uuid.uuid4()),
                userIdEmail = "curecart@gmail.com",
                # date = date.today(),
                date = date,
                product = product,
                payement = payement,
                delivery = delivery,
                category = category,
                amount = amount
            )
            invoice.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Invoice successfully saved to InvoiceDB.'})
        
    return JsonResponse({'error': 'Invalid request method.'})