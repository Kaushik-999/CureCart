import json
from django.http import JsonResponse
from pharmacyVendor.models import PharmacyVendorRegisterDB, AddMedicineDB, QueryDB
from utilitiesApi.models import InvoiceDB
from django.views.decorators.csrf import csrf_exempt
from datetime import date
import uuid
import jwt 
from bson import Decimal128

secret_key = "CURE_CART_BACKEND"
 
# Register Vendor View
@csrf_exempt
def pharmacyVendorRegister(request):
    if request.method == 'POST':
        
        token = request.headers.get("token")
        
        if not token:
            return JsonResponse({'error': 'Token not provided'})
        
        try:
            # Verify the token
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'})
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'})
        
         
        data = json.loads(request.body)
        print(data)
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        workEmail = data.get('workEmail')
        phoneNumber = data.get('phoneNumber')
        organizationName = data.get('organizationName')
        gstin = data.get('gstin')
        address = data.get('address')
        district = data.get('district')
        state = data.get('state')
        zipcode = data.get('zipcode')

        print(firstName, lastName, workEmail, phoneNumber, organizationName, gstin, address, district, state, zipcode)

        if None in [firstName, lastName, workEmail, phoneNumber, organizationName, gstin, address, district, state, zipcode]:
            return JsonResponse({'error': 'All fields are required.'})
        
        if len(phoneNumber) != 10 or not phoneNumber.isdigit():
            return JsonResponse({'error': 'Invalid phone number.'})
        
        if len(gstin) != 15 or not gstin.isdigit():
            return JsonResponse({'error': 'Invalid GSTIN.'})
        
        if not zipcode.isdigit():
            return JsonResponse({'error': 'Invalid ZIP code.'})
        
        try:
            pharmacy = PharmacyVendorRegisterDB(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                firstName=firstName,
                lastName=lastName,
                workEmail=workEmail,
                phoneNumber=phoneNumber,
                organizationName=organizationName,
                gstin=gstin,
                address=address,
                district=district,
                state=state,
                zipcode=zipcode
            )
            pharmacy.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Pharmacy details saved successfully.'})
    
    return JsonResponse({'error': 'Invalid request method.'})


# Add Medicine View
@csrf_exempt
def pharmacyVendorAddMedicine(request):
    if request.method == 'POST':

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

        data = json.loads(request.body)
        print(data)
        medicine_name = data.get('medicine_name')
        price_per_strip = data.get('price_per_strip')
        composition_name = data.get('composition_name')
        tablet_per_strip = data.get('tablet_per_strip')
        number_of_strips = data.get('number_of_strips')
        manufacturer_name = data.get('manufacturer_name')
        manufacturing_date = data.get('manufacturing_date')
        expiry_date = data.get('expiry_date')
        link = data.get('link')
        title = data.get('title')
        price = data.get('price')
        
        if None in [medicine_name, price_per_strip, composition_name, tablet_per_strip, number_of_strips, manufacturer_name, manufacturing_date, expiry_date]:
            return JsonResponse({'error': 'All fields are required.'})
        
        try:
            price_per_strip = float(price_per_strip)
            tablet_per_strip = int(tablet_per_strip)
            number_of_strips = int(number_of_strips)
            manufacturing_date = date.fromisoformat(manufacturing_date)
            expiry_date = date.fromisoformat(expiry_date)
            
            
            if price_per_strip <= 0 or tablet_per_strip <= 0 or number_of_strips <= 0:
                return JsonResponse({'error': 'Invalid value for price, tablet per strip, or number of strips.'})
            
            today = date.today()
            
            if manufacturing_date >= today:
                return JsonResponse({'error': 'Manufacturing date must be a previous date from today.'})
            
            if expiry_date <= today:
                return JsonResponse({'error': 'Expiry date must be a later date from today.'})
            
            medicine = AddMedicineDB(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                medicine_name=medicine_name,
                price_per_strip=price_per_strip,
                composition_name=composition_name,
                tablet_per_strip=tablet_per_strip,
                number_of_strips=number_of_strips,
                manufacturer_name=manufacturer_name,
                manufacturing_date=manufacturing_date,
                expiry_date=expiry_date,
                link = link,
                title = title,
                price = price
            )
            medicine.save()
        except Exception as e:
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        
        return JsonResponse({'success': 'Medicine saved successfully.'})
    
    return JsonResponse({'success': 'Invalid request method.'})

# Add Medicine View
@csrf_exempt
def pharmacyQuery(request):
    if request.method == 'POST':

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
        
        data = json.loads(request.body)
        print(data)
        feedbackType = data.get('feedbackType')
        describeYourFeedback = data.get('describeYourFeedback')

        if None in [feedbackType, describeYourFeedback]:
            return JsonResponse({'error': 'All fields are required.'})
        
        try:
            query = QueryDB(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                feedbackType = feedbackType,
                describeYourFeedback = describeYourFeedback
            )
            query.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Pharmacy Query saved successfully.'})
    
    return JsonResponse({'error': 'Invalid request method.'})


# Get all invoice of a certain user
@csrf_exempt
def getAllInvoices(request):
    if request.method == "GET":

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
        
        try:
             invoices = InvoiceDB.objects.filter(userIdEmail="kaushiksarmah999@gmail.com")
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving invoices.'})
        else:
            data = []
            for invoice in invoices:
                data.append({
                    'id': str(invoice.id),
                    'date': str(invoice.date),
                    'product': invoice.product,
                    'payement': invoice.payement,
                    'delivery': invoice.delivery,
                    'amount': float(invoice.amount.to_decimal())
                })
            return JsonResponse({'success': 'Invoices retrived successfully.','invoices':data}, safe=False)
    
    return JsonResponse({'error': 'Invalid request method.'})


@csrf_exempt
def getMedicineList(request):
    if request.method == "GET" : 
        
        try:
             medicines = AddMedicineDB.objects.all()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving medslist.'})
        else:
            data =[]
            for meds in medicines:
                data.append({
                    'id': str(meds.id),
                    'title': str(meds.title),
                    'price': meds.price,
                    
                    'link': str(meds.link),
                    
                })
            return JsonResponse({'success': 'Meds retrived successfully.','meds':data}, safe=False)
