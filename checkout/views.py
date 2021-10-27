from django.shortcuts import render
import stripe
import json
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
from django.core.mail import send_mail
from master_library.settings import EMAIL_HOST_USER
import time
from rest_framework.authentication import BasicAuthentication
# Create your views here.
# Create your views here.

stripe.api_key = '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'
# stripe.api_key = 'sk_test_51Ihg5PKaeSTNPk3vwKD92ktFpl1k04ile9ez2rFHCJBL5WqSPptGFC2mzGoIiWSiDkwiUojc7rDVr9KYGrWGnoS900tPdGpY2U'


class PaymentView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        print(request.data)
        test_payment_intent = stripe.PaymentIntent.create(
            amount=1000, currency='pln',
            payment_method_types=['card'],
            receipt_email='test@example.com')
        return Response(status=HTTP_200_OK, data=test_payment_intent)


class Save_stripe_info(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        data = json.loads(request.body)
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
            if(checkStatus.plan == "TR"):
                checkStatus.delete()
            else:

                return Response({'status': 1, 'message': "You already have an active plan."})
        if plan == "TR":
            obj = StripeCustomer.objects.create(user=user_obj, stripeCustomerId="Trial Only",
                                                plan=plan, invoice_prefix="Trial Only")
            obj.save()
            return Response({'status': 1, 'message': 'Free Trial activated Successfully'})
        elif plan == "SU":
            if(checkStatus):
                # price = 79
                price_id = 'price_1Jo2afKaeSTNPk3vTHyt7zAV'

            else:
                # price = 319
                price_id = 'price_1Jo2ZxKaeSTNPk3vX1rqt9HH'
        elif plan == "CU":
            if(checkStatus):
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
                if('couponCode' in request.POST and request.POST['couponCode'] != ""):
                    promoCode = stripe.PromotionCode.list(
                        code=request.POST['couponCode'], active=True)
                    stripe.Subscription.create(
                        customer=customer,
                        items=[
                            {
                                'price': price_id  # here paste your price id
                            }
                        ],
                        coupon=promoCode.data[0].coupon.id,
                    )
                else:
                    stripe.Subscription.create(
                        customer=customer,
                        items=[
                            {
                                'price': price_id  # here paste your price id
                            }
                        ],

                    )
                if(plan == "CU"):
                    user_obj.is_aou = True
                    user_obj.save()
                obj = StripeCustomer.objects.create(user=user_obj, stripeCustomerId=customer.id,
                                                    plan=plan, invoice_prefix=customer.invoice_prefix)
                obj.save()
                # return Response(status=HTTP_200_OK,
                #     data={'message': 'Success', 'data': {
                #     'customer_id': customer.id, 'extra_msg': extra_msg}
                # })
                return Response({'status': 1, 'message': 'Congratulations! Your Subscription has started'})
            except Exception as e:
                print(e)
                return Response({'status': 0, 'message': 'Transaction Failed'})


class CouponCustomerView(APIView):
    authentication_classes = [BasicAuthentication]

    def post(self, request):
        print(request.data)
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
        userData = CustomUser.objects.get(id=user_id)
        paymentData = StripeCustomer.objects.filter(user__id=userData.id)
        if(paymentData):
            paymentData = StripeCustomer.objects.get(user__id=userData.id)
            expiry_date = paymentData.timestamp.date() + datetime.timedelta(days=365)
            if(int((expiry_date-paymentData.timestamp.date()).days) >= 1):
                status = "Active"
                daysLeft = int((expiry_date-datetime.date.today()).days)
            else:
                status = "Inactive"
                daysLeft = 0
            temp = {
                'plan': paymentData.get_plan_display().upper(),
                'customerId': paymentData.stripeCustomerId,
                'date': paymentData.timestamp.date().strftime('%b %d,%Y'),
                'expiry_date': expiry_date.strftime('%b %d,%Y'),
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
