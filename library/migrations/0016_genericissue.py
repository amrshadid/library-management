# Generated by Django 3.2 on 2021-06-09 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0015_auto_20210605_1729'),
    ]

    operations = [
        migrations.CreateModel(
            name='GenericIssue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Generic Issue',
            },
        ),
    ]
