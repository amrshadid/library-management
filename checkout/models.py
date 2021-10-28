from django.db import models
from users.models import CustomUser



PLAN_CHOICES =(
    ('TR' , 'Trial'),
    ('SU' , 'Single User'),
    ('CU' , 'Community'),
)

# Create your models here.
class StripeCustomer(models.Model):
    user = models.OneToOneField(to=CustomUser, on_delete=models.CASCADE)
    stripeCustomerId = models.CharField(max_length=255)
    plan = models.CharField( max_length=2,
        choices=PLAN_CHOICES)

    invoice_prefix = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    Activated=models.BooleanField(default=True)

    def __str__(self):
        return self.user.email

class CouponCustomer(models.Model):
    user = models.OneToOneField(to=CustomUser, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="name",max_length=30,blank = True)
    email = models.EmailField(verbose_name="email",max_length=60, unique = True)
    phone = models.CharField(verbose_name='Mobile Number',max_length=10, blank = True)
    association_name = models.CharField(verbose_name="association_name",max_length=30,blank = True)
    association_mail = models.EmailField(verbose_name="association_email",max_length=60, unique = True)
    second_contact_name = models.CharField(verbose_name="Second Contact Person Name",max_length=30,blank = True)
    second_contact_email = models.EmailField(verbose_name="Second Contact Person Email",max_length=60, unique = True)
    second_contact_phone = models.CharField(verbose_name='Second Contact Person Phone',max_length=10, blank = True)
    comments = models.TextField()
    paid = models.BooleanField(default = False)
    activated = models.BooleanField(default = False)
    coupon = models.CharField(max_length=100,blank=True,null=True)
    plan = models.CharField( max_length=2,
        choices=PLAN_CHOICES)

