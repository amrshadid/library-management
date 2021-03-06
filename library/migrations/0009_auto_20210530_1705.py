# Generated by Django 3.2 on 2021-05-30 11:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0008_rename_title_rule_rule'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddIssue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Add Issue',
            },
        ),
        migrations.CreateModel(
            name='AR',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Architectural Guidelines & Standards',
            },
        ),
        migrations.CreateModel(
            name='RR',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Rules & Regulations',
            },
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subCategory', models.CharField(max_length=75)),
            ],
        ),
        migrations.AlterField(
            model_name='issue',
            name='category',
            field=models.CharField(choices=[('AR', 'Architectural Guidelines & Standards'), ('RR', 'Rules & Regulations'), ('ARR', 'Both AR & RR')], max_length=3),
        ),
        migrations.CreateModel(
            name='Mapping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='library.issue')),
                ('subCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='library.subcategory')),
            ],
        ),
    ]
