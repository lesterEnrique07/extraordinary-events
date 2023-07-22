from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models

# Register your models here.
class UserAdminConfig(UserAdmin):
    model = CustomUser
    search_fields = ('user_name',)
    list_filter = ('user_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('user_name', 'first_name', 'last_name', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('password',)}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('user_name', 'first_name', 'last_name', 'password1', 'password2', 'is_active', 'is_staff')}
        ),
    )

admin.site.register(CustomUser, UserAdminConfig)