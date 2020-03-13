from django.urls import path

from .views import *

urlpatterns = [
    path("cuisine/", CuisineView.as_view()),
    path("category/", CategoryView.as_view()),

    # homepage view
    path("homepage/", HomePageView.as_view()),

    # dish review
    path("dish-review/", DishReviewView.as_view()),
    path("cart/", CartView.as_view()),
    path("cart/<int:pk>/", CartDetailView.as_view()),
    path("address/", UserAddressView.as_view()),
    path("address/<int:pk>/", UserAddressUpdateView.as_view()),
    path("dishlisting/", DishLisingtView.as_view()),
    path("user-to-chef/", UserToChefStatus.as_view()),
    path("confirm-order/", ConfirmOrder.as_view()),

    # get current Dish Listing made by Chef
    path("chefs-list/", ChefListingView.as_view()),
    path("chef/mydishlisting/", GetDishesOfCurrentChef.as_view()),
    path("chef/mydishlisting/<int:pk>/", UpdateDishView.as_view()),

    # payment method
    path("payment-methods/", PaymentMethodView.as_view()),

]
