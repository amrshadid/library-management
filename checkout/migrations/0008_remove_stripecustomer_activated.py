# Generated by Django 3.0.3 on 2021-10-28 08:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0007_auto_20211028_0152'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stripecustomer',
            name='activated',
        ),
    ]
