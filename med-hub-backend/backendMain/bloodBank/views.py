import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import jwt 
from django.core.mail import send_mail  
from bloodBank.models import BloodBankMembersDB, BloodBankDonorDB
from utilitiesApi.models import BloodDB
import uuid
from datetime import datetime

secret_key = "CURE_CART_BACKEND"

# Blood Bank Become Member.
@csrf_exempt
def becomeMember(request):
    if request.method == 'POST':
        # JWT token verification
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

        # Process the request body
        data = json.loads(request.body)
        print(data)
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        organization = data.get("organization")
        address = data.get("address")
        operatingCity = data.get("operatingCity")

        print(name,email, phone, organization, address, operatingCity)

        if None in [name, email, phone, organization, address, operatingCity]:
            return JsonResponse({'error': 'All fields are required.'})
        
        try:
            member = BloodBankMembersDB(
                id=str(uuid.uuid4()),
                userIdEmail=userIdEmail,
                name = name,
                email = email,
                phone = phone,
                organization = organization,
                address = address,
                operatingCity = operatingCity
            )
            member.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Blood Bank member added successfully.'})

    return JsonResponse({'error': 'Invalid request method.'})

# Blood Bank become Donor.
@csrf_exempt
def becomeDonor(request):
    if request.method == 'POST':
        # JWT token verification
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

        # Process the request body
        data = json.loads(request.body)
        print(data)
        name = data.get("name")
        email = data.get("email")
        bloodGroup = data.get("bloodGroup")
        dateOfBirth = data.get("dateOfBirth")
        phone = data.get("phone")
        organization = data.get("organization")
        address = data.get("address")
        operatingCity = data.get("operatingCity")

        print(name,email, phone, organization, address, operatingCity)

        if None in [name, email, phone, organization, address, operatingCity]:
            return JsonResponse({'error': 'All fields are required.'})
        
        # Validate the date of birth
        date_of_birth_str = data.get('dateOfBirth')
        date_of_birth = datetime.strptime(date_of_birth_str, '%Y-%m-%d').date()
        current_date = datetime.now().date()

        if date_of_birth >= current_date:
            return JsonResponse({'error': 'Invalid Date of Birth'})
        
        # Calculate the age
        age = current_date.year - date_of_birth.year
        
        try:
            donor = BloodBankDonorDB(
                id=str(uuid.uuid4()),
                # userIdEmail=userIdEmail,
                userIdEmail="curecart@gmail.com",
                name = name,
                email = email,
                bloodGroup = bloodGroup,
                dateOfBirth = dateOfBirth,
                age = age,
                phone = phone,
                organization = organization,
                address = address,
                operatingCity = operatingCity
            )
            donor.save()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while saving the data.'})
        else:
            return JsonResponse({'success': 'Blood Bank Donor added successfully.'})
       

    return JsonResponse({'error': 'Invalid request method.'})

# Blood Bank - Get Blood Deatils
@csrf_exempt
def getBloodDetails(request):
    if request.method == 'GET':

        try:
            bloodDetails = BloodDB.objects.filter(userIdEmail="curecart@gmail.com")
            
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving customer count.'})
        else:
            bloodlist = []
            for blood in bloodDetails:
                bloodlist.append({
                    'bloodType':blood.bloodType,
                    'unitsAvailable':blood.unitsAvailable
                })
            print(bloodlist)
            return JsonResponse({
                'success': 'Blood deatils retrived successfully',
                'bloodlist': bloodlist
            })
        
    return JsonResponse({'error': 'Invalid request method.'})

# Blood Bank - Get Donor Deatils
@csrf_exempt
def getDonorDetails(request):
    if request.method == 'GET':

        try:
            donorDetails = BloodBankDonorDB.objects.all()
            
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'Error occurred while retriving customer count.'})
        else:
            print
            donorlist = []
            for donor in donorDetails:
                donorlist.append({
                    'id':donor.id,
                    'name':donor.name,
                    'name':donor.name,
                    'email':donor.email,
                    'bloodGroup':donor.bloodGroup,
                    'dateOfBirth':donor.dateOfBirth,
                    'age':donor.age,
                    'phone':donor.phone,
                    'organization':donor.organization,
                    'address':donor.address,
                    'operatingCity':donor.operatingCity
                })
            print(donorlist)
            return JsonResponse({
                'success': 'Donor deatils retrived successfully',
                'donorlist': donorlist
            })
        
    return JsonResponse({'error': 'Invalid request method.'})
