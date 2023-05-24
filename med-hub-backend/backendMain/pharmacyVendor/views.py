import json
from django.http import JsonResponse
from pharmacyVendor.models import PharmacyVendorRegisterDB, AddMedicineDB
from django.views.decorators.csrf import csrf_exempt
from datetime import date
import uuid

# Register Vendor View
@csrf_exempt
def pharmacyVendorRegister(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        work_email = data.get('work_email')
        phone_number = data.get('phone_number')
        organization_name = data.get('organization_name')
        gstin = data.get('gstin')
        address_line1 = data.get('address_line1')
        district = data.get('district')
        state = data.get('state')
        zipcode = data.get('zipcode')

        if None in [first_name, last_name, work_email, phone_number, organization_name, gstin, address_line1, district, state, zipcode]:
            return JsonResponse({'error': 'All fields are required.'})
        
        if len(phone_number) != 10 or not phone_number.isdigit():
            return JsonResponse({'error': 'Invalid phone number.'})
        
        if len(gstin) != 15 or not gstin.isdigit():
            return JsonResponse({'error': 'Invalid GSTIN.'})
        
        if not zipcode.isdigit():
            return JsonResponse({'error': 'Invalid ZIP code.'})
        
        try:
            pharmacy = PharmacyVendorRegisterDB(
                id=str(uuid.uuid4()),
                first_name=first_name,
                last_name=last_name,
                work_email=work_email,
                phone_number=phone_number,
                organization_name=organization_name,
                gstin=gstin,
                address_line1=address_line1,
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
        data = json.loads(request.body)
        
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