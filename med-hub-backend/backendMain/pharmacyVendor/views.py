import json
from django.http import JsonResponse
from pharmacyVendor.models import PharmacyVendorRegisterDB, AddMedicineDB, QueryDB
from utilitiesApi.models import InvoiceDB
from django.views.decorators.csrf import csrf_exempt
from datetime import date, datetime
import uuid 
import jwt 
from decimal import Decimal
from collections import defaultdict

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
                expiry_date=expiry_date
            )
            medicine.save()
        except Exception as e:
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        
        return JsonResponse({'success': 'Medicine saved successfully.'})
    
    return JsonResponse({'success': 'Invalid request method.'})

# Get pharmacy query View
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

# DashBoard View
@csrf_exempt
def getDashboardData(request):
    if request.method == 'GET':

        #token verification
        token = request.headers.get("token")
        if not token:
            return JsonResponse({'error': 'Token not provided'})
        try:
            decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
            userIdEmail = decoded_token['email']
            print(userIdEmail)
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token has expired'})
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Invalid token'})
        
        try:
            # invoices = InvoiceDB.objects.filter(userIdEmail=userIdEmail)
            # medicine = AddMedicineDB.objects.filter(userIdEmail=userIdEmail)
            invoices = InvoiceDB.objects.filter(userIdEmail="curecart@gmail.com")
            medicines = AddMedicineDB.objects.filter(userIdEmail="ruchi@gmail.com")


        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving customer count.'})
        else:

            # totalsales
            totalSales = Decimal('0')
            for invoice in invoices:
                totalSales = totalSales + Decimal(str(invoice.amount))
            
            # profit
            profit = 0.3*float(totalSales)

            header_data = []
            header_data.append({'customerCount':str(invoices.count())})
            header_data.append({'medicineCount':str(medicines.count())})
            header_data.append({'totalSales':str(totalSales)})
            header_data.append({'profit':str(profit)})

            # invoices
            invoicesData = []
            for invoice in invoices:
                invoicesData.append({
                    'id': str(invoice.id),
                    'date': str(invoice.date),
                    'product': invoice.product,
                    'payement': invoice.payement,
                    'delivery': invoice.delivery,
                    'category':invoice.category,
                    'amount': float(invoice.amount.to_decimal())
                })

            # List of months
            months = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

            # Dictionary to store invoices by month
            invoices_by_month = defaultdict(list)

            # Iterate over the invoicesData
            for invoice in invoicesData:
                date = datetime.strptime(invoice['date'], '%Y-%m-%d')
                month = months[date.month]
                invoices_by_month[month].append(invoice)

            current_month = datetime.now().month
            last_5_months = []

            for i in range(1, 6):
                month = (current_month - i) % 12
                last_5_months.append(month)

            # Rearrange invoices by month
            rearranged_invoices = {}
            for month_num in last_5_months:
                month_name = months[month_num]
                rearranged_invoices[month_name] = invoices_by_month[month_name]



            # total sales of last five month
            last_five_months_sales = []
            for month, r_invoices in rearranged_invoices.items():
                total_amount = sum(r_invoice['amount'] for r_invoice in r_invoices)
                rounded_total_amount = round(total_amount, 2)
                last_five_months_sales.append({str(month):str(rounded_total_amount)})

            categories = []
            category_count = {}
            for invoicesD in invoicesData:
                category = invoicesD['category']
                if category in category_count:
                    category_count[category] += 1
                else:
                    category_count[category] = 1

            for category, count in category_count.items():
                category_obj = {'category': category, 'occurrences': count}
                categories.append(category_obj)

            return JsonResponse({
                    'success': 'Dashboard data retrived successfully.',
                    'header_data':header_data,
                    'last_five_months_sales':last_five_months_sales,
                    'categories':categories,
                    'invoices':invoicesData
                }, safe=False)



    return JsonResponse({'success': 'Invalid request method.'})