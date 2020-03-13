import random

from faker import Faker

fake = Faker()
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.models import User


# Create your models here.
class Cuisine(models.Model):
    name = models.CharField(null=False, blank=False, max_length=300)

    def __str__(self):
        return self.name


class FoodType(models.Model):
    name = models.CharField(null=False, blank=False, default="Vegan", max_length=100)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(null=False, blank=False, max_length=300)

    def __str__(self):
        return self.name


def default_chef_name():
    return fake.name()


def default_country():
    return fake.country()


def default_state():
    return fake.state()


def default_street():
    return fake.street_name()


def default_city():
    return fake.city()


def default_zipcode():
    return fake.zipcode()


class UserAddress(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE, related_name="addresses")
    street = models.CharField(null=False, blank=False, max_length=300, default=default_street)
    city = models.CharField(null=False, blank=False, max_length=300, default=default_city)
    bio = models.CharField(null=False, blank=False, max_length=600, default="No Bio Found.")
    state = models.CharField(null=False, blank=False, max_length=300, default=default_state)
    country = models.CharField(null=False, blank=False, max_length=300, default=default_country)
    zipcode = models.CharField(null=False, blank=False, max_length=300, default=default_zipcode)

    def __str__(self):
        return self.user.first_name + " - " + self.city + " - " + self.state + " - " + self.country


class UserRoles(models.Model):
    user = models.OneToOneField(get_user_model(), null=False, blank=False, on_delete=models.CASCADE,
                                related_name="user_roles")
    customer = models.BooleanField(null=False, blank=False, default=True)
    chef = models.BooleanField(null=False, blank=False, default=False)

    def __str__(self):
        return str(self.user.first_name) + " - " + str(self.user) + " - Chef is: " + str(self.chef)


@receiver(post_save, sender=get_user_model(), dispatch_uid="initialize_userrole")
def initialize_userrole(sender, instance, **kwargs):
    if kwargs["created"]:
        UserRoles.objects.create(user=instance)


# @receiver(pre_save, sender=UserRoles, dispatch_uid="check_chef_user_has_address")
# def check_chef_user_has_address(sender, instance, **kwargs):
#     if instance.chef:
#         address = UserAddress.objects.filter(user=instance.user)
#         if not address:
#             return "User has no address. To become a Chef, you should have a valid address."


@receiver(post_save, sender=UserRoles, dispatch_uid="initialize_chef_for_user")
def initialize_chef_for_user(sender, instance, **kwargs):
    if not kwargs["created"]:
        if instance.chef:
            address = UserAddress.objects.filter(user=instance.user)[0]
            if address:
                try:
                    Chef.objects.create(user=instance.user, pickup_address=address)
                except:
                    pass


class Chef(models.Model):
    user = models.OneToOneField(User, null=False, blank=False, on_delete=models.CASCADE, related_name="chef_object",
                                default=1)
    # chef_name = models.CharField(null=False, blank=False, max_length=300, default=default_chef_name)
    pickup_address = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True)
    img = models.CharField(blank=True, null=False,
                           default="https://www.xing.com/image/e_c_e_924dbdc05_26384775_3/christoph-dran%C3%9F-foto.256x256.jpg",
                           max_length=400)

    def __str__(self):
        return self.user.first_name + " - " + str(self.user)


class Dish(models.Model):
    chef = models.ForeignKey(Chef, on_delete=models.CASCADE, related_name="dishes")
    foodtype = models.ForeignKey(FoodType, on_delete=models.CASCADE)
    available = models.BooleanField(null=False, blank=False, default=True)
    dish_name = models.CharField(null=False, blank=False, max_length=300)
    cuisine = models.ManyToManyField(Cuisine, blank=False)
    category = models.ManyToManyField(Category, blank=False)
    spicy = models.IntegerField(blank=False, null=False)
    price = models.FloatField(blank=False, null=False)
    description = models.CharField(blank=True, null=False, default="", max_length=400)
    img = models.CharField(blank=True, null=False,
                           default="https://b.zmtcdn.com/data/dish_photos/235/d172c324ff062397264ad328c5b53235.JPG?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                           max_length=400)

    def __str__(self):
        return self.dish_name

    # after creating a dish, initialize the dish like.


@receiver(post_save, sender=Dish, dispatch_uid="funchandler")
def funchandler(sender, instance, **kwargs):
    if kwargs["created"]:
        DishLikes.objects.create(dish=instance)


def random_number():
    return random.randint(1, 365)


class DishLikes(models.Model):
    dish = models.OneToOneField(Dish, on_delete=models.CASCADE, blank=False, null=False, unique=True,
                                related_name="likes")
    likecount = models.IntegerField(default=random_number)

    def __str__(self):
        return self.dish.dish_name + " - " + str(self.likecount) + " likes"


class DishReview(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE,
                             related_name="reviews_given")
    dish = models.ForeignKey(Dish, null=False, blank=False, on_delete=models.CASCADE, related_name="reviews")
    rating = models.IntegerField(blank=False, null=False)
    title = models.CharField(blank=False, null=False, max_length=500)
    description = models.CharField(blank=False, null=False, max_length=500)

    class Meta:
        unique_together = [['user', 'dish']]

    def __str__(self):
        return str(self.user) + " - " + str(self.dish) + " - " + str(self.rating)


class Cart(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE,
                             related_name="cart")
    added_datetime = models.DateTimeField(auto_now_add=True, blank=False, null=False)
    dish = models.ForeignKey(Dish, null=False, blank=False, on_delete=models.CASCADE)
    count = models.IntegerField(blank=False, null=False)

    class Meta:
        unique_together = [['user', 'dish']]

    def __str__(self):
        return self.dish.dish_name + str(self.count) + " - by " + self.user.first_name


class PaymentMethod(models.Model):
    name = models.CharField(null=False, blank=False, max_length=300)

    def __str__(self):
        return self.name


class Orders(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE,
                             related_name="orders")
    added_datetime = models.DateTimeField(auto_now_add=True, blank=False, null=False)

    def __str__(self):
        return str(self.user) + " - " + str(self.added_datetime)


class OrderDetails(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE, blank=False, null=False)
    dish = models.ForeignKey(Dish, null=False, blank=False, on_delete=models.CASCADE)
    count = models.IntegerField(blank=False, null=False)

    def __str__(self):
        return str(self.dish) + " (" + str(self.count) + ")" + " - placed by - " + str(self.order.user)


@receiver(post_save, sender=Orders, dispatch_uid="create_order_details")
def create_order_details(sender, instance, **kwargs):
    if kwargs["created"]:
        user = instance.user
        cart_items = Cart.objects.filter(user=user)
        for i in cart_items:
            OrderDetails.objects.create(order=instance, dish=i.dish, count=i.count)
        # delete the items from cart after order is placed.
        cart_items.delete()
