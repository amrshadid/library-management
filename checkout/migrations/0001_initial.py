# Generated by Django 3.2 on 2021-06-12 20:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='StripeCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stripeCustomerId', models.CharField(max_length=255)),
                ('plan', models.CharField(choices=[('TR', 'Trial'), ('SU', 'Single User'), ('CU', 'Community')], max_length=2)),
                ('invoice_prefix', models.CharField(max_length=255)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CouponCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=30, verbose_name='name')),
                ('email', models.EmailField(max_length=60, unique=True, verbose_name='email')),
                ('phone', models.CharField(blank=True, max_length=10, verbose_name='Mobile Number')),
                ('association_name', models.CharField(blank=True, max_length=30, verbose_name='association_name')),
                ('association_mail', models.EmailField(max_length=60, unique=True, verbose_name='association_email')),
                ('second_contact_name', models.CharField(blank=True, max_length=30, verbose_name='Second Contact Person Name')),
                ('second_contact_email', models.EmailField(max_length=60, unique=True, verbose_name='Second Contact Person Email')),
                ('second_contact_phone', models.CharField(blank=True, max_length=10, verbose_name='Second Contact Person Phone')),
                ('comments', models.TextField()),
                ('paid', models.BooleanField(default=False)),
                ('plan', models.CharField(choices=[('TR', 'Trial'), ('SU', 'Single User'), ('CU', 'Community')], max_length=2)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
