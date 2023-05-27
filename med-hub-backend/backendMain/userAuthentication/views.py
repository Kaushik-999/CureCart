from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login
import jwt

secret_key = "CURE_CART_BACKEND"

# Route 1: Sign-Up-User View Function
@csrf_exempt
def signup_view(request):

    if request.method == 'POST':

        # grab the email and password from request
        body = json.loads(request.body)
        username = body['username']
        email = body['email']
        password = body['password']
        # print(body['username'])
        # print(body['email'])
        # print(body['password'])

        # check if email and password is not null
        if not username or not email or not password:
            return JsonResponse({'error':'Username and Password are required.'})
        
        # check if username already exists
        try:
            User.objects.get(username=username)
            return JsonResponse({'error': 'Username already exists.'})
        except User.DoesNotExist:
            pass

        try:
            user = User.objects.get(email=email)
            return JsonResponse({'error': 'Email already exists.'})
        except User.DoesNotExist:
            # if all okay, create a user object
            user = User(username=username, email=email)
            user.set_password(password)

            # save it to database
            user.save()
            
            # Create JWT token
            token = jwt.encode({'email': email}, secret_key, algorithm='HS256')
            return JsonResponse({'success':'user successfully signed up','token': token})
    
    return JsonResponse({'error':'Invalid Request'})

# Route 2: Sign-in-User View Function
@csrf_exempt
def signin_view(request):
    
    if request.method == 'POST':
        # Parse the request body as JSON
        body = json.loads(request.body)
        
        email = body['email']
        password = body['password']
        print(email)
        print(password)
        
        # Authenticate user
        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            # Log in the authenticated user
            login(request, user)

            # Create JWT token
            token = jwt.encode({'email': email}, secret_key, algorithm='HS256')
            
            return JsonResponse({'success': 'Login successful','token': token})
        else:
            return JsonResponse({'error': 'Invalid credentials'})
    
    return JsonResponse({'error':'Invalid Request'})