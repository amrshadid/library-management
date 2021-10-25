from django.shortcuts import redirect
from django.contrib import admin
from .models import Rule, Issue, UserSelectedIssue, SubCategory, Mapping, RuleMapping
from django import forms
from users.models import CustomUser
from django.http import HttpResponse
from django.urls import path, reverse
from django.db import models
from rest_framework.response import Response
# Register your models here.
from django.contrib.admin import ModelAdmin, SimpleListFilter
from django.utils.http import urlencode
from django.utils.html import format_html
from django.contrib import admin
from allauth.socialaccount.models import SocialToken, SocialAccount, SocialApp
from rest_framework.authtoken.models import TokenProxy
from django.contrib.sites.models import Site
from django.conf import settings

class CategoryFilter(SimpleListFilter):
    title = 'Category '  # a label for our filter
    parameter_name = 'category'  # you can put anything here

    def lookups(self, request, model_admin):
        # This is where you create filter options; we have two:
        return [
            ('AR', 'Architectural Guidelines & Standards'),
            ('RR', 'Rules & Regulations'),
        ]

    def queryset(self, request, queryset):
        # This is where you process parameters selected by use via filter options:
        if not self.value():
            return queryset
        if self.value() == 'AR':
            queryset = queryset.exclude(category='RR')
        else:
            queryset = queryset.exclude(category='AR')
        return queryset


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    change_list_template = "admin/issue_list.html"
    list_display = ("title", "rules", "subCategories", "conflicting_rules")
    list_filter = (CategoryFilter, )
    fields = ("title", "category", "author",
              "iscustom", "issue_note", "is_free")
    search_fields = ['title']

    def get_changeform_initial_data(self, request):
        get_data = super(IssueAdmin, self).get_changeform_initial_data(request)
        try:
            category = request.GET['_changelist_filters'].split("&")[
                0].split("=")
            get_data['category'] = category[-1]
        except:
            pass
        get_data['author'] = request.user.pk
        return get_data

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        #form.instance.author = request.user
        return form

    def save_model(self, request, obj, form, change):
        obj.user = request.user
        super().save_model(request, obj, form, change)

    def rules(self, obj):
        pk = obj.id

        return format_html(
            '<a  href="{0}?issue={1}" class="button">Rules</a>&nbsp;',
            reverse('admin:library_rule_changelist'), obj.id
        )

    def subCategories(self, obj):
        pk = obj.id
        lst = []
        mapping_qs = Mapping.objects.filter(issue__id=pk)
        #sub_qs = SubCategory.objects.none()
        for qs in mapping_qs:
            instance = qs.subCategory
            sub_qs = SubCategory.objects.get(pk=instance.pk)
            lst.append(sub_qs.subCategory)
        return format_html('<p>{0}</p>', lst)

        # return format_html(
        #'<a  href="{0}?issue={1}" class="button">SubCategories</a>&nbsp;',
        #            reverse('admin:library_mapping_changelist' ), obj.id
        #        )
    def has_module_permission(self, request):
        return False

    def conflicting_rules(self, obj):
        pk = obj.id

        return format_html(
            '<a  href="{0}?issue={1}" class="button">Conflicting Rules</a>&nbsp;',
            reverse('admin:library_rulemapping_add'), obj.id
        )

    rules.short_description = "Rules"


@admin.register(Rule)
class RuleAdmin(admin.ModelAdmin):
    list_display = ("rule", "issue", "state")
    list_filter = ("issue", )
    fields = ("rule", "issue", "isStateSpecific",
              "state", "author", "iscustom")

    def get_changeform_initial_data(self, request):
        get_data = super(RuleAdmin, self).get_changeform_initial_data(request)
        get_data['author'] = request.user.pk
        return get_data

    def has_module_permission(self, request):
        return False


@admin.register(RuleMapping)
class RMAdmin(admin.ModelAdmin):
    list_display = ("rule", "rule_mapped")

    # def get_form(self, request, obj=None, **kwargs):
    #     pk =int(request.GET['issue'])
    #     print(pk)
    #     form = super(RMAdmin, self).get_form(request, obj, **kwargs)
    #     form.fields['rule'].queryset = Rule.objects.filter(issue__id = pk)
    #     form.fields['rule_mapped'].queryset = Rule.objects.filter(issue__id = pk)
    #     return form
    def render_change_form(self, request, context, add=False, change=False, form_url='', obj=None):
        pk = int(request.GET['issue'])
        context['adminform'].form.fields['rule'].queryset = Rule.objects.filter(
            issue__id=pk)
        context['adminform'].form.fields['rule_mapped'].queryset = Rule.objects.filter(
            issue__id=pk)
        context.update({
            'show_save': True,
            'show_save_and_continue': False,
            'show_delete': False,
            'show_save_and_add_another': False,
        })
        return super().render_change_form(request, context, add, change, form_url, obj)


@admin.register(Mapping)
class MappingAdmin(admin.ModelAdmin):
    list_display = ("subCategory", "issue")

    def has_module_permission(self, request):
        return False

# admin.site.register(UserSelectedIssue)


@admin.register(UserSelectedIssue)
class USAdmin(admin.ModelAdmin):
    list_display = ("user_email", "rule")

    def user_email(self, obj):
        pk = obj.id
        lst = []
        us_obj = UserSelectedIssue.objects.get(id=pk)
        user_obj = us_obj.user
        #mail = CustomUser.objects.get(user_id)
        #sub_qs = SubCategory.objects.none()

        return format_html('<p>{0}</p>', user_obj.email)


# admin.site.register(Guideline)
admin.site.register(SubCategory)


# Category wise
class AR(models.Model):
    class Meta:
        verbose_name_plural = 'Architectural Guidelines & Standards'
        app_label = 'library'


class RR(models.Model):
    class Meta:
        verbose_name_plural = 'Rules & Regulations'
        app_label = 'library'


class AddIssue(models.Model):
    class Meta:
        verbose_name_plural = 'Add Issue'
        app_label = 'library'


class CustomIssue(models.Model):
    class Meta:
        verbose_name_plural = 'Custom Topics'
        app_label = 'library'


class GenericIssue(models.Model):
    class Meta:
        verbose_name_plural = 'Topics'
        app_label = 'library'

# @admin.register(AR)


class ARAdmin(admin.ModelAdmin):
    model = AR

    def my_custom_view(self, request):
        return redirect(settings.URL_WEB + "/admin/library/issue/?category=AR&iscustom__exact=0")

    def get_urls(self):
        view_name = '{}_{}_changelist'.format(
            self.model._meta.app_label, self.model._meta.model_name)
        return [
            path('my_admin_path/', self.my_custom_view, name=view_name),
        ]

# @admin.register(RR)


class RRAdmin(admin.ModelAdmin):
    model = RR

    def my_custom_view(self, request):
        return redirect(settings.URL_WEB + "/admin/library/issue/?category=RR&iscustom__exact=0")

    def get_urls(self):
        view_name = '{}_{}_changelist'.format(
            self.model._meta.app_label, self.model._meta.model_name)
        return [
            path('my_admin_path/', self.my_custom_view, name=view_name),
        ]


@admin.register(CustomIssue)
class CIAdmin(admin.ModelAdmin):
    model = CustomIssue

    def my_custom_view(self, request):
        return redirect(settings.URL_WEB + "/admin/library/issue/?iscustom__exact=1")

    def get_urls(self):
        view_name = '{}_{}_changelist'.format(
            self.model._meta.app_label, self.model._meta.model_name)
        return [
            path('my_admin_path/', self.my_custom_view, name=view_name),
        ]


@admin.register(GenericIssue)
class GIAdmin(admin.ModelAdmin):
    model = GenericIssue

    def my_custom_view(self, request):
        return redirect(settings.URL_WEB + "/admin/library/issue/?iscustom__exact=0")

    def get_urls(self):
        view_name = '{}_{}_changelist'.format(
            self.model._meta.app_label, self.model._meta.model_name)
        return [
            path('my_admin_path/', self.my_custom_view, name=view_name),
        ]
# @admin.register(AddIssue)
# class AddIssueAdmin(admin.ModelAdmin):
#     model = AddIssue

#     def my_custom_view(self,request):
#         return redirect(settings.URL_WEB + "/layouts/adminForm")

#     def get_urls(self):
#         view_name = '{}_{}_changelist'.format(
#             self.model._meta.app_label, self.model._meta.model_name)
#         return [
#             path('my_admin_path/', self.my_custom_view, name=view_name),
#         ]
