from rest_framework import serializers
from .models import *
from users.models import CustomUser
from users.serializers import UserSerializer


class CouponCustomerSerializer(serializers.ModelSerializer):
    plan = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()
    

    class Meta:
        model = CouponCustomer
        fields = (
            'id',
            'user',
            'name',
            'email',
            'phone',
            'association_name',
            'association_mail',
            'second_contact_name',
            'second_contact_email',
            'second_contact_phone',
            'comments',
            'plan'
            
        )

    def get_plan(self, obj):
        return obj.get_plan_display()

    def get_user(self, obj):
        return UserSerializer(obj).data['email']

