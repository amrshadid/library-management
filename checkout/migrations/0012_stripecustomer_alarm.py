# Generated by Django 3.0.3 on 2021-10-29 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0011_stripecustomer_stripesubscriptionsid'),
    ]

    operations = [
        migrations.AddField(
            model_name='stripecustomer',
            name='alarm',
            field=models.BooleanField(default=False),
        ),
    ]
