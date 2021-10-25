from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
#from phone_field import PhoneField
from django.core.validators import MinLengthValidator
# Create your models here.


class States(models.Model):
    state_name = models.CharField(max_length=100)


class MyAccountManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, name, association_name, state, contact_no, password=None):
        if not email:
            raise ValueError("User must have email address")
        if not name:
            raise ValueError("User must have name")
        if not association_name:
            raise ValueError(
                "User must provide full legal name of association")
        if not state:
            raise ValueError(
                "User must provide state where association located in")
        if not contact_no:
            raise ValueError("User must have contact number")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            association_name=association_name,
            state=state,
            contact_no=contact_no
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_staffuser(self, email, name, association_name, state, contact_no, password):
        # def create_staffuser(self,email,name,contact_no,password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            name=name,
            association_name=association_name,
            state=state,
            contact_no=contact_no
        )
        user.is_staff = True
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_superuser(self, email, name, association_name, state, contact_no, password):
        user = self.create_user(
            email,
            password=password,
            name=name,
            association_name=association_name,
            state=state,
            contact_no=contact_no
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self.db)
        return user


class CustomUser(AbstractBaseUser):
    username = models.CharField(verbose_name="name", max_length=30, blank=True)
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    date_joined = models.DateTimeField(
        verbose_name="date joined", auto_now_add=True)
    last_login = models.DateTimeField(
        verbose_name="last login", auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_aou = models.BooleanField(default=False)
    name = models.CharField(verbose_name="name", max_length=30, blank=True)
    association_name = models.CharField(
        verbose_name="association_name", max_length=30, blank=True)
    state = models.CharField(verbose_name="state", max_length=30, blank=True)
    contact_no = models.CharField(
        verbose_name='contact', max_length=10, blank=True)
    notes = models.TextField(default=None, blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'association_name', 'state', 'contact_no']

    objects = MyAccountManager()

    def __str__(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return self.is_admin or self.is_staff

    def has_module_perms(self, app_label):
        return True


class Teams(models.Model):
    owners = models.ForeignKey(CustomUser,
                               on_delete=models.CASCADE,
                               related_name='AOU')
    subAou = models.ForeignKey(CustomUser,
                               on_delete=models.CASCADE,
                               related_name='subAOU')


TICKET_STATUS = (
    ('ON', 'Opened'),
    ('WIP', 'Work in Progress'),
    ('RE', 'Resolved'),
    ('URE', 'Unresolved'),
)


class Ticket(models.Model):
    relTo = models.CharField(max_length=100, null=True, default="Other")
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    userType = models.CharField(max_length=100, blank=True, null=True)
    query = models.TextField()
    status = models.CharField(max_length=3,
                              choices=TICKET_STATUS, default='ON')
