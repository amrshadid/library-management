# Generated by Django 3.0.3 on 2021-10-28 09:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0008_remove_stripecustomer_activated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stripecustomer',
            name='timestamp',
            field=models.DateTimeField(default=datetime.date.today),
        ),
    ]
