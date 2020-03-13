from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import *
# Create your views here.
from .serializers import *


class CuisineView(generics.ListAPIView):
    """Get the list of Cuisines."""
    queryset = Cuisine.objects.all()
    serializer_class = CuisineSerializer
    permission_classes = [AllowAny, ]


class CategoryView(generics.ListAPIView):
    """List the Categories"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny, ]


class HomePageView(APIView):
    """
    returns the top dishes, chefs.
    """

    def get(self, request, format=None):
        dishes = Dish.objects.all()[:4]
        serializer = DishSerializer(dishes, many=True)
        res = {"dishes": serializer.data}
        chefs = Chef.objects.all()[:5]
        serializer = ChefSerializer(chefs, many=True)
        res["chefs"] = serializer.data
        return Response(res)


class DishReviewView(generics.ListCreateAPIView):
    """Get/Create Dish Reviews"""
    queryset = DishReview.objects.all()
    serializer_class = DishReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, ]


class CartView(generics.ListCreateAPIView):
    """Get the contents of the cart"""
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)


class CartDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, Update, Delete API for contents of the Cart """
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsOwner, IsAuthenticated]


class UserAddressView(generics.ListCreateAPIView):
    """Returns the all the addresses of the user"""
    serializer_class = UserAddressSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        user = self.request.user
        return UserAddress.objects.filter(user=user)


class UserAddressUpdateView(generics.RetrieveUpdateDestroyAPIView):
    """Get/Update/Delete the addresses of the user"""
    serializer_class = UserAddressSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        user = self.request.user
        return UserAddress.objects.filter(user=user)


class PaymentMethodView(generics.ListAPIView):
    """Returns the list of Payment Methods"""
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer
    permission_classes = [AllowAny]


class DishLisingtView(generics.ListAPIView):
    """Returns all the dishes of all the chefs"""
    queryset = Dish.objects.filter(available=True)
    permission_classes = [AllowAny, ]
    serializer_class = DishSerializer


class GetDishesOfCurrentChef(generics.ListCreateAPIView):
    """Get all the dishes of the current chef or Create a new Dish"""
    permission_classes = [IsAuthenticated, ]
    serializer_class = DishSerializer

    def get_queryset(self):
        chef = self.request.user.chef_object
        return Dish.objects.filter(chef=chef)


class UpdateDishView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = DishSerializer

    def get_queryset(self):
        chef = self.request.user.chef_object
        return Dish.objects.filter(chef=chef)


class UserToChefStatus(APIView):
    """Elevates the User to CHEF status. Requires User Id"""

    def post(self, request, format=None):
        requested_user = request.user
        if requested_user.id:
            addresses = UserAddress.objects.filter(user=requested_user)
            if not addresses:
                return Response("You need to have atleast one address to become a Chef.",
                                status=status.HTTP_400_BAD_REQUEST)
            if UserRoles.objects.filter(user=requested_user, chef=True).exists():
                return Response("You are already a Chef.", status=status.HTTP_200_OK)
            else:
                obj = requested_user.user_roles
                obj.chef = True
                obj.save()
                res = "You are now a Chef!"
                return Response(res, status=status.HTTP_200_OK)

        else:
            res = "invalid request. Login to Perform this action.".title()
        return Response(res, status=status.HTTP_400_BAD_REQUEST)


class ChefListingView(generics.ListAPIView):
    """Get List of all chefs and the dishes made by them."""
    permission_classes = [AllowAny, ]
    serializer_class = ChefSerializer
    queryset = Chef.objects.all()


class ConfirmOrder(APIView):
    def post(self, request, format=None):
        requested_user = request.user
        if requested_user.id:
            cart_items = Cart.objects.filter(user=requested_user)
            if cart_items.count() > 0:
                order = Orders.objects.create(user=requested_user)
                return Response("Order Placed Successfully.", status=status.HTTP_200_OK)
            else:
                return Response("No Items in your cart.", status=status.HTTP_200_OK)
        else:
            return Response("Login to Place an Order.", status=status.HTTP_400_BAD_REQUEST)
