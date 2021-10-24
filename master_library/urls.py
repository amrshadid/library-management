from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email
from users import views as mv
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt
from master_library.settings import BASE_DIR

import os
urlpatterns = [

    path('admin/', admin.site.urls),
    path('userDetails/<userToken>', mv.UserDetails.as_view(), name="userDetails"),
    path('userDetails', mv.UserDetails.as_view(), name="userDetails"),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
    #path('accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
    path('accounts-rest/registration/account-confirm-email/(?P<key>[-:\w]+)/$',
         mv.emailConfirm.as_view(), name='account_confirm_email'),
    path('', include('library.urls')),
    path('api/obtain_auth_token/', mv.MyObtainToken.as_view()),
    path('team/', mv.TeamView.as_view()),
    path('loginUser', mv.loginUser.as_view(), name="loginUser"),
    path('payment/', include('checkout.urls')),
    path('getStates', mv.getStates.as_view(), name="getStates"),
    path('deleteCustomUser', mv.deleteCustomUser.as_view(), name="deleteCustomUser"),
    path('sendPasswordOTP', mv.sendPasswordOTP.as_view(), name="sendPasswordOTP"),
    path('changePassword', mv.changePassword.as_view(), name="changePassword"),
    path('rest-auth/facebook/', mv.FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', mv.GoogleLogin.as_view(), name='google_login'),
    path('SignUp/', mv.SignUp.as_view(), name="SignUp"),
    path('SignUp/<token>', mv.SignUp.as_view(), name="SignUpVerify"),
    path('sendQuery/', mv.TicketView.as_view()),
    path('send_mail', mv.SendMail.as_view()),
    path('changeSubAou', mv.changeSubAou.as_view(), name="changeSubAou"),
    path('layouts/pricing', mv.pricingView.as_view(), name="pricingView"),
    path('layouts/profile', mv.profileView.as_view(), name="profileView"),
    path('layouts/viewAllRules', mv.viewAllRulesView.as_view(),
         name="viewAllRulesView"),
    path('layouts/customIssues', mv.customIssuesView.as_view(),
         name="customIssuesView"),
    path('layouts/savedRules', mv.savedRulesView.as_view(), name="savedRulesView"),
    path('layouts/dashboard', mv.DashboardView.as_view(), name="DashboardView"),
    path('layouts/login', mv.loginView.as_view(), name="loginView"),
    path('layouts/adminForm', mv.adminForm.as_view(), name="adminForm"),
    path('layouts/signUp', mv.signUpView.as_view(), name="signUpView"),
    path('layouts/category', mv.categoryView.as_view(), name="categoryView"),
    path('layouts/socialSignUpForm',
         mv.socialSignUpForm.as_view(), name="socialSignUpForm"),
    path('layouts/paymentPage', mv.paymentPage.as_view(), name="paymentPage"),
    path('layouts/contact', mv.contactPage.as_view(), name="contactPage"),
    path('layouts/adminEditIssues',
         mv.adminEditIssues.as_view(), name="adminEditIssues"),
    path('layouts/app', mv.appPage.as_view(), name="appPage"),
]

urlpatterns += static("/assets/", document_root=os.path.join(
        os.path.join(BASE_DIR, 'frontend'), 'out', 'assets'))
urlpatterns += static("/_next/", document_root=os.path.join(
        os.path.join(BASE_DIR, 'frontend'), 'out', '_next'))
urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
