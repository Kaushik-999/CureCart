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
        payement = data.get('payement')
        delivery = data.get('delivery')
        amount = data.get('amount')
        
        if None in [product, payement, delivery, amount]:
            return JsonResponse({"error":"All fields are required"})
        
        try:
            invoice = InvoiceDB(
                id = str(uuid.uuid4()),
                userIdEmail = "kaushiksarmah999@gmail.com",
                date = date.today(),
                product = product,
                payement = payement,
                delivery = delivery,
                amount = amount
            )
            invoice.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Invoice successfully saved to InvoiceDB.'})
        
    return JsonResponse({'error': 'Invalid request method.'})