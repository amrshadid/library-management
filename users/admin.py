from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import CustomUser,Ticket,States
# Register your models here.
import django.contrib.auth.models
from django.contrib import auth
#from rest_framework.authtoken.models import Token
from django.core.mail import send_mail
from django.utils.html import format_html
from django.conf import settings

#admin.site.unregister(Token)
admin.site.unregister(auth.models.Group)

class AccountAdmin(UserAdmin):
    list_display = ('email','name','association_name','contact_no','is_admin','is_staff')
    search_fields = ('association_name','name')
    readonly_fields = ('is_staff','is_admin','date_joined','last_login')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(CustomUser,AccountAdmin)
admin.site.register(States)

#admin.site.register(Teams)
@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('name','userType',"status", "sendUpdate")

    def sendUpdate(self, obj):
        return format_html(
        '<a  href="{0}?email={1}&status={2}" class="button" target="_blank">Update Status</a>&nbsp;', settings.URL_WEB + '/send_mail',
        obj.email, obj.status)