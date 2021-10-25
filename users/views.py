from typing import Tuple
from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect, get_object_or_404
from .models import CustomUser, Teams, States
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from django.contrib.auth import authenticate, login
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from django.http import HttpResponseRedirect
from django.core.mail import message, send_mail, send_mass_mail
from master_library.settings import EMAIL_HOST_USER
from master_library.settings import BASE_DIR
from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.contrib.auth.hashers import make_password
from django.contrib.sessions.models import Session
import os
from django.views.generic import View
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.contrib.auth.hashers import make_password
import math
import string
import random
from checkout.models import StripeCustomer
# Create your views here.
from rest_framework.authentication import BasicAuthentication
from allauth.account.admin import EmailAddress
import json
from django.conf import settings

class contactPage(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'contact.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class appPage(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'app.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class adminEditIssues(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'adminEditIssues.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                adminEditIssues.html not found ! build your React app !!
                """,
                status=501,
            )


class paymentPage(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'paymentPage.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class socialSignUpForm(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'socialSignUpForm.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class pricingView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'pricing.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class profileView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'profile.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class viewAllRulesView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'viewAllRules.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class customIssuesView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'customIssues.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class savedRulesView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'savedRules.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class DashboardView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'profile.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )


class loginView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'login.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                login.html not found ! build your React app !!
                """,
                status=501,
            )


class adminForm(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'adminForm.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                adminForm.html not found ! build your React app !!
                """,
                status=501,
            )


class signUpView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'signUp.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                signup.html not found ! build your React app !!
                """,
                status=501,
            )


class categoryView(View):
    def get(self, request):
        try:
            with open(os.path.join(BASE_DIR, 'frontend', 'out', 'layouts', 'category.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                category.html not found ! build your React app !!
                """,
                status=501,
            )


class FacebookLogin(SocialLoginView):
    authentication_classes = [BasicAuthentication]
    adapter_class = FacebookOAuth2Adapter
    client_class = OAuth2Client
    serializer_class = SocialLoginSerializer

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)


class GoogleLogin(SocialLoginView):
    authentication_classes = [BasicAuthentication]
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    serializer_class = SocialLoginSerializer

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)


class MyObtainToken(ObtainAuthToken):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        key = request.GET['key']
        user_id = Token.objects.get(key=key).user_id
        userdata = CustomUser.objects.get(id=user_id)
        serializer = UserSerializer(userdata)
        return Response(serializer.data)


class getStates(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        statesData = States.objects.all()
        data = []
        for k in statesData:
            temp = {
                'id': k.id,
                'state': k.state_name
            }
            data.append(temp)
        return Response({'status': 1, 'data': data})


class sendPasswordOTP(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        email = request.POST['email']
        user_instance = CustomUser.objects.filter(email=email)
        if(user_instance):
            string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            OTP = ""
            length = len(string)
            for i in range(4):
                OTP += string[math.floor(random.random() * length)]
            temp = "Your One Time Password for password Change is "+OTP
            send_mail(
                'HOARulesTemplate.com Registration',
                temp,
                EMAIL_HOST_USER,
                [email],
                fail_silently=False,
                html_message=temp
            )
            return Response({'status': 1, 'message': 'Success', 'otp': OTP})
        else:
            return Response({'status': 0, 'message': 'email id does not exist. Please Signup'})


class changePassword(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        email = request.POST['email']
        user_instance = CustomUser.objects.get(email=email)
        # password = make_password(request.POST['password'])
        print(user_instance.password)
        user_instance.set_password(request.POST['password'])
        print(user_instance.password)
        user_instance.save()
        return Response({'status': 1, 'message': "Password Changed Successfully"})


class UserDetails(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request, userToken):
        userData = Token.objects.get(key=userToken).user
        userdata = CustomUser.objects.get(id=userData.id)
        planData = StripeCustomer.objects.filter(user__email=userdata.email)
        if(planData):
            planData = StripeCustomer.objects.get(user__email=userdata.email)
            plan = planData.plan
        else:
            plan = ""
        subAouStatus = Teams.objects.filter(subAou__email=userdata.email)
        isSubAou = False
        if(subAouStatus):
            plan = "SU"
            isSubAou = True
        temp = {
            "association_name": userdata.association_name,
            "contact_no": userdata.contact_no,
            "email": userdata.email,
            "is_aou": userdata.is_aou,
            "is_subaou": isSubAou,
            "name": userdata.name,
            "state": userdata.state,
            "contact_no": userdata.contact_no,
            "plan": plan
        }
        return Response(temp)

    def post(self, request):
        user_instance = Token.objects.get(
            key=request.POST['hoarTemplatetoken']).user
        user_instance.name = request.POST['name']
        user_instance.association_name = request.POST['association_name']
        user_instance.state = request.POST['state']
        user_instance.contact_no = request.POST['contact_no']
        user_instance.save()
        serializer = UserSerializer(user_instance)
        return Response({'status': 1, 'message': 'Saved Successfully', 'data': serializer.data})


class TeamView(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        key = request.GET['hoarTemplatetoken']
        user_id = Token.objects.get(key=key).user_id
        userdata = CustomUser.objects.get(id=user_id)
        if userdata.is_aou == True:
            queryset = Teams.objects.filter(
                owners=user_id, subAou__is_active=True)
            data = []
            for k in queryset:
                temp = {
                    'id': k.id,
                    'userId': k.subAou.id,
                    'email': k.subAou.email,
                    'is_active': k.subAou.is_active,
                    'name': k.subAou.name
                }
                data.append(temp)
            # subaou_lst = CustomUser.objects.none()
            # for qs in queryset:
            #     subaou_lst |= CustomUser.objects.get(pk = qs.subAou.id)
            # serializer = TeamSerializer(subaou_lst, many=True)
            return Response({'status': 1, 'message': 'Success', 'data': data})
        else:
            return Response({'status': 0, 'message': 'Not Authorized'})

    def randomPassword(self, l):
        letters = string.ascii_lowercase
        return "".join(random.choice(letters) for i in range(l))

    def post(self, request):
        try:
            key = request.POST['hoarTemplatetoken']
            user_id = Token.objects.get(key=key).user_id
            userdata = CustomUser.objects.get(id=user_id)
            subAou_list = json.loads(request.POST['subaoulist'])
            print(subAou_list)
            if userdata.is_aou == True:
                print(Teams.objects.filter(owners=userdata,
                                           subAou__is_active=True).count())
                if(Teams.objects.filter(owners=userdata, subAou__is_active=True).count() + len(subAou_list) > 5):
                    return Response({'status': 0, 'message': 'Sub Aou Linmit reached. Delete a sub aou to add more.'})
                for user in subAou_list:
                    pass_rand = self.randomPassword(8)
                    user["password"] = pass_rand
                    user["hashed_password"] = make_password(pass_rand)

                for user in subAou_list:
                    subAou_obj = CustomUser(name=user["name"], email=user["email"],
                                            password=user["hashed_password"], association_name=userdata.association_name, state=userdata.state)
                    subAou_obj.save()
                    team_obj = Teams(owners=userdata, subAou=subAou_obj)
                    team_obj.save()

                # print(subAou_list)
                # subAou_name = request.POST['name']
                # subAou_email = request.POST['email']
                # subAou_pwd = make_password(request.POST['password'])
                # subAou_obj = CustomUser(name=subAou_name, email=subAou_email,
                #                         password=subAou_pwd, association_name=userdata.association_name, state=userdata.state)
                # subAou_obj.save()
                # team_obj = Teams(owners=userdata, subAou=subAou_obj)
                # team_obj.save()

                # making mass mails
                data_mail = []
                for user in subAou_list:
                    message = "Thank you "+user["name"]+" for your registration at HOARulesTemplate.com. Please use \"" + user['password'] + \
                        "\" for your password when logging in. We look forward to assisting you in creating your community’s new rules!\n\n\nSincerely,\nJenny Jamison\nVice-President of Customer Satisfaction"
                    data_mail.append(
                        ('HOARulesTemplate.com Registration', message, EMAIL_HOST_USER, [user["email"]]))
                data_mail = tuple(data_mail)
                # # temp="You have been register as Sub AOU by "+userdata.email+". Please login using this email id and password->"+request.POST['password']+" on http://hoarulestemplate.com/."
                # send_mail(
                #     'HOARulesTemplate.com Registration',
                #     temp,
                #     EMAIL_HOST_USER,
                #     [subAou_email],
                #     fail_silently=False,
                #     html_message=temp
                # )
                send_mass_mail(data_mail)
                return Response({'status': 1, 'message': 'Success'})
            return Response({'status': 0, 'message': 'Failed'}, status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({'status': 0, 'message': 'Please make sure every added Community User is unique, Invalid Data'})


class loginUser(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        email = request.POST['email']
        userData = CustomUser.objects.filter(email=email)
        if(userData):
            userData = CustomUser.objects.get(email=email)
        else:
            return Response({'status': 0, 'message': "Oops Email doesn't exist"})
        password = request.POST['password']
        user = authenticate(email=request.POST['email'], password=password)
        if user is not None:
            token = Token.objects.filter(user_id=user.id)
            if(token):
                token = Token.objects.get(user_id=user.id)
                key = token.key
            else:
                token = Token.objects.create(user=user)
                key = token.key
            if user.is_active:
                try:
                    emailCheck = EmailAddress.objects.get(email=email)
                except:
                    emailCheck = EmailAddress(
                        email=email, verified=True, primary=True, user_id=userData.id)
                    emailCheck.save()
                if(emailCheck.verified == True):
                    login(request, user)
                    if user.is_superuser or user.is_admin:
                        return Response({'status': 1, 'message': 'login successfull', 'role': 'admin', 'key': key})
                    else:
                        return Response({'status': 1, 'message': 'login successfull', 'role': 'user', 'key': key})
                else:
                    return Response({'status': 0, 'message': 'Email not Verified. Please Verify Email First.'})
            else:
                return Response({'status': 0, 'message': 'Your account has been disabled'})
        else:
            return Response({'status': 0, 'message': 'Incorrect Password. Please try again'})


class emailConfirm(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        # A React Router Route will handle the failure scenario
        return HttpResponseRedirect(settings.URL_WEB + '/layouts/login')

    def get_object(self, queryset=None):
        key = self.kwargs['key']
        email_confirmation = EmailConfirmationHMAC.from_key(key)
        if not email_confirmation:
            if queryset is None:
                queryset = self.get_queryset()
            try:
                email_confirmation = queryset.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                # A React Router Route will handle the failure scenario
                return HttpResponseRedirect('/login/failure/')
        return email_confirmation


class deleteCustomUser(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        key = request.GET['hoarTemplatetoken']
        user_id = Token.objects.get(key=key).user_id
        userdata = CustomUser.objects.get(id=user_id)
        if userdata.is_aou == True:
            customUser = CustomUser.objects.get(id=int(request.GET['userId']))
            customUser.is_active = False
            customUser.save()
            return redirect(settings.URL_WEB + "/layouts/profile")
        else:
            return Response({'status': 0, 'message': 'Oops You are not an AOU'})


class SignUp(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request, token):
        try:
            user_id = Token.objects.get(key=token).user_id
            userdata = CustomUser.objects.get(id=user_id)
            userdata.is_active = True
            userdata.save()
            emailData = EmailAddress.objects.get(user=userdata)
            emailData.verified = True
            emailData.save()
            return redirect('/layouts/profile?reauth=1&token='+str(token))
        except Exception as e:
            print(e)
            return Response({'data': e.errors})

    def post(self, request):
        userData = CustomUser.objects.filter(email=request.POST['email'])
        if(userData):
            return Response({'status': 0, 'message': 'User Already registered'})
        serializer = CustomRegisterSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save(request)
            user = CustomUser.objects.get(email=request.POST['email'])
            user.is_aou = False
            user.is_active = False
            token = Token.objects.create(user=user)
            temp = settings.URL_WEB + "/SignUp/"+token.key+"<html><head></head><body><p>Thank you for your registration at HOARulesTemplate.com. Please select the link above or copy and paste the link into your computer’s browser. We look forward to assisting you in creating your community’s new rules!</p><p>Sincerely,</p><p>Jenny Jamison<br>Vice-President of Customer Satisfaction</p></body></html>"
            send_mail(
                'HOARulesTemplate.com Registration',
                temp,
                EMAIL_HOST_USER,
                [user.email],
                fail_silently=False,
                html_message=temp
            )
            return Response({'status': 1, 'message': ' Registered Successfully. Verification email Sent.'})
        else:
            return Response({'status': 0, 'message': 'OOPS! Some error occured'})


class TicketView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        #key = request.POST['token']
        #user_id = Token.objects.get(key= key).user_id
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 1, 'message': 'Question successfully submitted. Our Agents will contact you soon!'})
        return Response({'status': 0, 'message': 'OOPS! Please Try again', 'data': serializer.errors})


class SendMail(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        user_email = request.GET['email']
        status = request.GET['status']
        if status == 'ON':
            status = 'Opened'
        elif status == 'WIP':
            status = 'Work in progress'
        elif status == 'RE':
            status = 'Resolved'
        elif status == 'URE':
            status = 'Unresolved'

        send_mail(
            'Support Desk Update – HOARulesTemplate.com',
            'Ticket Status : ' + status,
            'abc@example.com',
            [user_email],
            fail_silently=False,
        )
        return HttpResponse("Successfully Sent")


class changeSubAou(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        aou_user_id = Token.objects.get(
            key=request.POST['hoarTemplatetoken']).user_id
        aou_user = CustomUser.objects.get(id=aou_user_id)
        if(aou_user.is_aou == True):
            sub_aou_id = int(request.POST['subAouSelect'])
            print(sub_aou_id)
            sub_aou_map = Teams.objects.get(id=int(sub_aou_id))
            sub_aou = CustomUser.objects.get(id=sub_aou_map.subAou.id)
            sub_aou.is_aou = True

            teamData = Teams.objects.filter(owners=aou_user)
            for k in teamData:
                if(k.id != sub_aou_map.id):
                    k.owners = sub_aou
                    k.save()
                elif(k.id == sub_aou_map.id):
                    k.delete()
                else:
                    pass
            subAouAddTeam = Teams(owners=sub_aou, subAou=aou_user)
            subAouAddTeam.save()
            aou_user.is_aou = False
            sub_aou.save()
            aou_user.save()
            paymentData = StripeCustomer.objects.get(user=aou_user)
            paymentData.user = sub_aou
            paymentData.save()
            return Response({'status': 1, 'message': 'Changed Successfully'})
        else:
            return Response({'status': 0, 'message': 'You are not an AOU'})
