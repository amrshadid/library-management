from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('subCategory/', SubCategoryView.as_view(), name='sub_category'),
    path('issues/<category>/', CustomAdminView.as_view(), name='issue'),
    #path('issues/add_custom_issue/', csrf_exempt(IssueListView.as_view()), name='issue-list'),
    path('issues_list/', IssueListView.as_view(), name='issue-list'),
    path('issues_detail/<pk>/', IssueDetailView.as_view(), name='issue-detail'),
    path('rules/', RuleView.as_view(), name='rule-list'),
    path('rules_detail/<pk>', RuleDetailView.as_view(), name='rule-detail'),
    path('user_selected/', UserSelectedIssueView.as_view(),
         name='user-selected-issue'),
    path('getSubCategories/<category_name>',
         getSubCategories.as_view(), name="getSubCategories"),
    path('', homeView.as_view(), name="index"),
    path('admin_issues_list/', AdminIssuesListView.as_view(),
         name='admin-issue-list'),
    path('AdminEditIssues/', CustomIssueEditView.as_view(),
         name='admin-edit-issue-list'),
    path('getSelectedRule/', getSelectedRule.as_view(), name="getSelectedRule"),
    path('subAou_rule/', SubAouRulesView.as_view(), name='subAou_rule'),
    path('generatepdf/', GeneratePDF.as_view(), name='generatepdf'),
    path('generatedocx/', GenerateDocx.as_view(), name='generatedocx'),


    #path('save-document/', SaveDocumentView.as_view(), name='save-document'),
    #path('guideline/', GuidelineDetailView.as_view(), name='guideline'),
    # path('custom-issue/<pk>/',
    # UserSelectedIssueUpdateRule.as_view(), name='custom-issue-update-rule'),
]
