from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(
    [UserRoles, Category, Cuisine, Chef, Dish, FoodType, DishReview, DishLikes, Cart, UserAddress, PaymentMethod,
     OrderDetails, Orders])
