# Generated by Django 4.1.9 on 2023-06-16 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilitiesApi', '0002_invoicedb_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoicedb',
            name='category',
            field=models.CharField(max_length=50),
        ),
    ]