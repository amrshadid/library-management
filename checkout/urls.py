from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
     path('checkout/', PaymentView.as_view()),
     path('save_stripe_info/', Save_stripe_info.as_view()),
     path('offline_payment/', CouponCustomerView.as_view()),
     path('getPaymentDetails/',getPaymentDetails.as_view()),
     path('send_coupon/', SendCoupon.as_view()),
     path('checkCoupon/',checkCoupon.as_view())
     ]