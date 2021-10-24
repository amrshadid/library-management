# Generated by Django 3.2 on 2021-05-15 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_is_superpower_customuser_is_superuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='association_name',
            field=models.CharField(blank=True, max_length=30, verbose_name='association_name'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='contact_no',
            field=models.CharField(blank=True, max_length=10, verbose_name='contact'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='name',
            field=models.CharField(blank=True, max_length=30, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='state',
            field=models.CharField(blank=True, max_length=30, verbose_name='state'),
        ),
    ]
