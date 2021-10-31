from django.shortcuts import render
import stripe
from stripe.api_resources import subscription
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK,
                                   HTTP_400_BAD_REQUEST,
                                   HTTP_201_CREATED,
                                   HTTP_204_NO_CONTENT
                                   )
from users.models import CustomUser
from checkout.models import *
from checkout.serializers import CouponCustomerSerializer
from rest_framework.authtoken.models import Token
import datetime
from django.utils import timezone
from django.core.mail import send_mail
from master_library.settings import EMAIL_HOST_USER
import time
from rest_framework.authentication import BasicAuthentication
# Create your views here.
# Create your views here.

# stripe.api_key = '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'
stripe.api_key = 'sk_test_51Ihg5PKaeSTNPk3vwKD92ktFpl1k04ile9ez2rFHCJBL5WqSPptGFC2mzGoIiWSiDkwiUojc7rDVr9KYGrWGnoS900tPdGpY2U'




def Send_alarm(obj):
    userdata = CustomUser.objects.get(name=obj.user)
    subscription=obj
    print(userdata.email)
    temp = f"Dear {userdata.name} your subscription on plan {subscription.get_plan()} it's almost over, you have 2 day before subscription stop, Thank you for join our family "
    print(temp)
    temp=''
    if(subscription.plan =='TH'):
        temp = f"Dear {userdata.name} your subscription on plan {subscription.plan} it's almost over, you have 7 days before subscription stop, Thank you for join our family "
    else:
        temp = f"Dear {userdata.name} your subscription on plan {subscription.plan} it's almost over, you have 2 day before subscription stop, Thank you for join our family "
    send_mail(
    'Mail From hoarulestemplate',
    temp,
    EMAIL_HOST_USER,
    [userdata.email],
    fail_silently=False,
    html_message=temp
    )
    obj.alarm=True
    obj.save()
    return 0

class PaymentView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        test_payment_intent = stripe.PaymentIntent.create(
            amount=1000, currency='pln',
            payment_method_types=['card'],
            receipt_email='test@example.com')
        return Response(status=HTTP_200_OK, data=test_payment_intent)


class Save_stripe_info(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        data = request.data
        price_id=''
        key = request.POST['token']
        user_id = Token.objects.get(key=key).user_id
        userdata = CustomUser.objects.get(id=user_id)
        email = userdata.email
        user_obj = CustomUser.objects.get(email=email)
        plan = data['plan']
        checkStatus = StripeCustomer.objects.filter(user__email=email)
        if(checkStatus):
            checkStatus = StripeCustomer.objects.get(user__email=email)
            if(checkStatus.plan == "TR" or checkStatus.plan == "" ):
                checkStatus.plan=''
                checkStatus.timestamp=timezone.now()
                checkStatus.save()
            else:
                return Response({'status': 1, 'message': "You already have an active plan."})
        if plan == "TR" and not checkStatus :
            obj = StripeCustomer.objects.create(user=user_obj, stripeCustomerId="Trial Only",
                                                plan=plan, 
                                                invoice_prefix="Trial Only",
                                                stripeSubscriptionsId='Trial Only',
                                                timestamp=timezone.now()
                                                )
            obj.save()
            return Response({'status': 1, 'message': 'Free Trial activated Successfully'})
        elif plan == "TR" and checkStatus:
            checkStatus.plan="TR"
            checkStatus.timestamp=timezone.now()
            checkStatus.save()
            return Response({'status': 1, 'message': 'Free Trial activated Successfully'})

        
        elif plan == "TH":
            if(checkStatus.pervious_plan=="TH" and checkStatus.plan=='TH'):
                # price = 3
                price_id = 'price_1JpuZ2KaeSTNPk3vybt4IEd9'

            elif(checkStatus.pervious_plan=="TH"):
                # price = 1
                price_id = 'price_1JpuZ2KaeSTNPk3vozDFmNMI'
            else:
                # price = 3
                price_id = 'price_1JpuZ2KaeSTNPk3vybt4IEd9'

        elif plan == "SU":
            if(checkStatus.pervious_plan=="SU"):
                # price = 79
                price_id = 'price_1Jo2afKaeSTNPk3vTHyt7zAV'
            else:
                # price = 319
                price_id = 'price_1Jo2ZxKaeSTNPk3vX1rqt9HH'

        elif plan == "CU":
            if(checkStatus.pervious_plan=="CU"):
                # price = 99
                price_id = 'price_1Jo2cJKaeSTNPk3v6RXSQHe9'
            else:
                # price = 349
                price_id = 'price_1Jo2bYKaeSTNPk3vQjuJ1zIG' 
            
        else:
            return Response({'status': 0, 'message': 'Wrong Plan Selection'})

        payment_method_id = data['payment_method_id']
        extra_msg = ''  # add new variable to response message
        # checking if customer with provided email already exists
        customer_data = stripe.Customer.list(email=email).data
        # if the array is empty it means the email has not been used yet
        customer=0
        if len(customer_data) == 0:
            # creating customer
            customer = stripe.Customer.create(

                email=email, 
                payment_method=payment_method_id,
                invoice_settings={
                    'default_payment_method': payment_method_id
                }
                )
        else:
            customer = customer_data[0]
            extra_msg = "Customer already existed."
        try:
            try:
                Subscription=0
                if('couponCode' in request.POST and request.POST['couponCode'] != ""):
                    promoCode = stripe.PromotionCode.list(
                        code=request.POST['couponCode'], active=True)
                    Subscription = stripe.Subscription.create(
                        customer=customer,
                        items=[
                            {
                                'price': price_id  # here paste your price id
                            }
                        ],
                        coupon=promoCode.data[0].coupon.id,
                    )
                else:
                    Subscription = stripe.Subscription.create(
                        customer=customer,
                        items=[
                            {
                                'price': price_id  # here paste your price id
                            }
                        ],

                    )
                if( Subscription and Subscription.status=='incomplete'):

                    stripe.Subscription.delete(
                            Subscription.id
                            )
                    return Response({'status': 0, 'message': 'Transaction failed '})
                    
                if(plan == "CU"):
                    user_obj.is_aou = True
                    user_obj.save()
                
                if(checkStatus):
                    checkStatus.stripeCustomerId=customer.id
                    checkStatus.stripeSubscriptionsId=Subscription.id
                    checkStatus.invoice_prefix=customer.invoice_prefix
                    if checkStatus.alarm==True:
                        checkStatus.alarm=False
                    if checkStatus.plan !='':
                        checkStatus.pervious_plan=checkStatus.plan
                    checkStatus.plan=plan
                    checkStatus.timestamp=timezone.now()
                    checkStatus.save()
                else:
                    obj = StripeCustomer.objects.create(user=user_obj, stripeCustomerId=customer.id, 
                                                        plan=plan, 
                                                        invoice_prefix=customer.invoice_prefix,
                                                        timestamp=timezone.now(),
                                                        stripeSubscriptionsId=str(Subscription.id),

                                                        )
                    obj.save()

                return Response({'status': 1, 'message': 'Congratulations! Your Subscription has started'})

            except Exception as e:
                return Response({'status': 0, 'message': 'Transaction failed'})
        except Exception as e:
            return Response({'status': 0, 'message': 'Transaction failed'})


class CouponCustomerView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        user_id = Token.objects.get(
            key=request.POST['hoarTemplatetoken']).user_id
        user_instance = CustomUser.objects.get(id=user_id)
        serializer = CouponCustomerSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save(user=user_instance)
            temp = "HoarTemplateRules have Successfully recieved your request for invoice. Our agents will contact you soon."
            send_mail(
                'Mail From hoarulestemplate',
                temp,
                EMAIL_HOST_USER,
                [request.POST['association_mail']],
                fail_silently=False,
                html_message=temp
            )
            return Response({'status': 1, 'message': "Request Sent Successfully. Our Agents will contact you soon."})
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class SendCoupon(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        user_id = request.GET['userId']
        ispaid = request.GET['ispaid']
        id = request.GET['id']
        plan = request.GET['plan']
        email = request.GET['email']
        user_instance = CustomUser.objects.get(pk=user_id)
        couponUser = CouponCustomer.objects.get(
            user__email=user_instance.email)
        if ispaid == 'True':
            ct = str(time.time())
            coupon = str(ct.split('.')[0]) + 'gbiug'+str(id)
            couponUser.coupon = coupon
            couponUser.save()
            # stripe_customer_obj = StripeCustomer(user = user_instance, stripeCustomerId = id, plan = plan,
            #         invoice_prefix= coupon )
            # stripe_customer_obj.save()

            send_mail(
                'Payment is Done Successfully',
                'Here is your coupon code ' + coupon,
                EMAIL_HOST_USER,
                [email, couponUser.association_mail],
                fail_silently=False,
            )
            return Response({'status': 1, 'message': 'Success'})
        return Response({'message': 'Please made the payment first'}, status=HTTP_400_BAD_REQUEST)


class checkCoupon(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        try:
            user_id = Token.objects.get(
                key=request.POST['hoarTemplatetoken']).user_id
            user_instance = CustomUser.objects.get(id=user_id)
        except:
            return Response({'status': 0, 'message': "User Doesn't Exist"})
        try:
            couponUser = CouponCustomer.objects.get(
                user__email=user_instance.email)
        except:
            return Response({'status': 0, 'message': "First register for coupon please!"})
        if(request.POST['coupon'] == couponUser.coupon):
            couponUser.activated = True
            couponUser.save()
            stripe_customer_obj = StripeCustomer(user=user_instance, stripeCustomerId="Coupon Method", plan=couponUser.plan,
                                                 invoice_prefix=couponUser.coupon)
            stripe_customer_obj.save()
            user_instance.is_aou = True
            user_instance.save()
            return Response({'status': 1, 'message': 'Plan Successfully Activated'})
        else:
            return Response({'status': 0, 'message': "OOPS! Wrong coupon code."})


class getPaymentDetails(APIView):
    authentication_classes = [BasicAuthentication]

    def get(self, request):
        token = request.GET['hoarTemplatetoken']
        user_id = Token.objects.get(key=token).user_id
        userData = CustomUser.objects.get(id=user_id).first()
        temp={}
        paymentData = StripeCustomer.objects.get(user__id=userData.id)
        if(paymentData and paymentData.plan !=""):
            expiry_date = paymentData.timestamp.date() + datetime.timedelta(days=365)
            Three_day = paymentData.timestamp.date() + datetime.timedelta(days=3)
            
            if(int((expiry_date-paymentData.timestamp.date()).days) >= 7 and paymentData.alarm==False ):
                Send_alarm(paymentData)
            

            if(int((expiry_date-paymentData.timestamp.date()).days) >= 1):
                status = "Active"
                daysLeft = int((expiry_date-datetime.date.today()).days)
                
            if paymentData.plan == "TH":
                if(int((Three_day-paymentData.timestamp.date()).days) >= 1 and paymentData.alarm==False ):
                    Send_alarm(paymentData)

                if(int((Three_day-paymentData.timestamp.date()).days) >= 1):
                    status = "Active"
                    daysLeft = int((Three_day-datetime.date.today()).days)

                else:
                    paymentData.timestamp=timezone.now()
                    if(paymentData.plan != "TR"):
                        paymentData.pervious_plan=paymentData.plan
                        stripe.Subscription.delete(
                            paymentData.stripeSubscriptionsId ,
                            )
                    
                        paymentData.plan="TR"
                        paymentData.save()
                        status = "Inactive"
                        daysLeft = 0
                


            else:

                paymentData.timestamp=timezone.now()
                if(paymentData.plan != "TR"):
                    paymentData.pervious_plan=paymentData.plan
                    stripe.Subscription.delete(
                        paymentData.stripeSubscriptionsId ,
                        )
                   
                paymentData.plan="TR"
                paymentData.save()
                status = "Inactive"
                daysLeft = 0
                

            if(paymentData.plan != "TR"):
                expiry_date= expiry_date.strftime('%b %d,%Y')
            else:
                expiry_date='Unlimited'
                daysLeft='Unlimited'

            temp = {
                'plan': paymentData.get_plan_display().upper(),
                'customerId': paymentData.stripeCustomerId,
                'date': paymentData.timestamp.strftime('%b %d,%Y'),
                'expiry_date':expiry_date ,
                'status': status,
                'daysLeft': daysLeft,
                'paymentMode': "Stripe"
                }
        else:
            temp = {
                'plan': "Unavailable",
                'customerId': "Unavailable",
                'date': "Unavailable",
                'expiry_date': "Unavailable",
                'status': "Unavailable",
                'daysLeft': "Unavailable",
                'paymentMode': "None"
            }
        return Response({'status': 1, 'data': temp})
