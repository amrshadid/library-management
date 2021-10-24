from django.contrib import admin
# Register your models here.
from checkout.models import StripeCustomer, CouponCustomer
from django.core.mail import send_mail
import time
from django.utils.html import format_html
from django.db import models

from master_library.settings import EMAIL_HOST_USER


@admin.register(StripeCustomer)
class StripeCustomerAdmin(admin.ModelAdmin):
    list_display=('user','stripeCustomerId','plan','invoice_prefix','timestamp')
@admin.register(CouponCustomer)
class CCAdmin(admin.ModelAdmin):
    list_display = ("email","paid","activated","sendCoupon")
    def sendCoupon(self, obj):
        pk = obj.id
        user = obj.user
        return format_html(
        '<a  href="{0}?userId={1}&ispaid={2}&id={3}&plan={4}&email={5}" class="button">Send Coupon Code</a>&nbsp;',
        'https://hoarulestemplate.com/payment/send_coupon/', user.id, obj.paid,pk,obj.plan, obj.email)
        