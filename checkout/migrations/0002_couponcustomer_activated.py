# Generated by Django 3.2 on 2021-06-14 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='couponcustomer',
            name='activated',
            field=models.BooleanField(default=False),
        ),
    ]
