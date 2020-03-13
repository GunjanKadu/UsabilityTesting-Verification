from rest_framework import serializers

from .models import *


class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class UsrRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRoles
        fields = "__all__"


class FoodTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodType
        fields = "__all__"


# Dish Serializer
class DishSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField()
    chef_name = serializers.SerializerMethodField()

    def validate_chef(self, value):
        user = None
        request = self.context.get("request")
        return request.user.chef_object

    def get_chef_name(self, obj):
        return str(obj.chef.user.first_name).title()

    def get_likes(self, obj):
        return obj.likes.likecount

    class Meta:
        model = Dish
        fields = "__all__"
        read_only = ["chef"]


class DishReviewSerializer(serializers.ModelSerializer):
    def validate_user(self, value):
        user = None
        request = self.context.get("request")
        if request:
            user = request.user
        if user != value:
            raise serializers.ValidationError("Error: UserId mismatch. Userid and the requested user doesn't match.")
        return value

    class Meta:
        model = DishReview
        fields = "__all__"


class CustomDishSerializerForChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = "__all__"


# chef serializer
class ChefSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    dishes = serializers.SerializerMethodField()

    def get_dishes(self, obj):
        dishes = []
        items = Dish.objects.filter(chef=obj)
        print(items)
        if items:
            for i in items:
                print("*" * 100)
                item = CustomDishSerializerForChefSerializer(i)
                dishes.append(item.data)
        return dishes

    def get_name(self, obj):
        return str(obj.user.first_name).title()

    class Meta:
        model = Chef
        fields = "__all__"


class CartSerializer(serializers.ModelSerializer):

    def validate_user(self, value):
        user = None
        request = self.context.get("request")
        if request:
            user = request.user
        if user != value:
            raise serializers.ValidationError("Error: UserId mismatch. Userid and the requested user doesn't match.")
        return value

    class Meta:
        model = Cart
        fields = "__all__"


class UserAddressSerializer(serializers.ModelSerializer):

    def validate_user(self, value):
        user = None
        request = self.context.get("request")
        if request:
            user = request.user
        print(type(value))
        if user != value:
            raise serializers.ValidationError(
                "Error: UserId mismatch. Userid field and the requested user doesn't match.")
        return value

    class Meta:
        model = UserAddress
        fields = "__all__"


class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = "__all__"


class UserToChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = "__all__"
