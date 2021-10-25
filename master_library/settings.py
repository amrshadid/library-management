"""
Django settings for master_library project.

Generated by 'django-admin startproject' using Django 3.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import os
import dj_database_url


URL_WEB='https://library-mp1.herokuapp.com'
# https://hoarulestemplate.com -> producation 
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-h2m-75-_$-8z)$^gqk_r6u3425x)_)fu@2=3j!+ke-54q467wq'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = (os.environ.get('DEBUG') == 'True')

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'library',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',

    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'rest_auth.registration',

    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',

    'users',
    'corsheaders',
    'checkout',

]

SITE_ID = 2


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',

]
CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'master_library.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend'
]

WSGI_APPLICATION = 'master_library.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
     'default': {
        # 'ENGINE': 'django.db.backends.mysql',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        
    }
}

#LIVE SETTING
DATABASES['default']=dj_database_url.parse(os.environ.get('DATABASE_URL'))

# LOCAL SETTING 
# DATABASES['default'] = dj_database_url.parse('postgres://sclvydndrbiget:70391332d496b043fd6c85ddf84393af263c6201e6675e3389cebb35efc92e05@ec2-3-215-137-131.compute-1.amazonaws.com:5432/d8510v14h59ukm')




# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
MEDIA_URL = '/media/'

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.CustomUser'

# django all auth Configuration settings


ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE = True
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
#ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/?verification=1'
#ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/?verification=1'
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/'
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/verified'

LOGIN_REDIRECT_URL = '/'

# SOCIAL_ACCOUNT_PROVIDERS = {
#     'google':{
#         'SCOPE' : [
#             'profile',
#             'email',
#         ],
#         'AUTH_PARAMS':{
#             'access_type' : 'online',
#         },
#         'facebook': {
#         'METHOD': 'oauth2',
#         'SCOPE': ['email'],
#         'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
#         'INIT_PARAMS': {'cookie': True},
#         'FIELDS': [
#             'id',
#             'email',
#             'name',
#             'updated_time',
#         ],
#         'EXCHANGE_TOKEN': True,
#         'LOCALE_FUNC': 'path.to.callable',
#         'VERIFIED_EMAIL': False,
#         'VERSION': 'v7.0',
#     }
#     }
# }

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "APP": {
            "client_id": "1026622571263-c3rmdfvrnpnhnmbpvhm9149e7moggn0d.apps.googleusercontent.com",
            "secret": "fryZuyHtyAXB82MWJFKxINSi",
        },
    },
    'facebook': {
        "APP": {
            "client_id": "489988798782352",
            "secret": "9ba0459c21803fe1ba7b5df8f126d29e",
        },
    }
}

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'users.serializers.UserSerializer',
}

REST_AUTH_REGISTER_SERIALIZERS = {
    'REGISTER_SERIALIZER': 'users.serializers.CustomRegisterSerializer',
}

REST_FRAMEWORK = {
    """
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly ',
    ),
    """
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    )
}
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'az1-ss40.a2hosting.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'info@hoarulestemplate.com'
EMAIL_HOST_PASSWORD = 'Rick@12345#'
DEFAULT_FROM_EMAIL = 'info@hoarulestemplate.com'


SERVER_CREATED_FILES_PATH = os.path.join(BASE_DIR, "server_generated_files")
