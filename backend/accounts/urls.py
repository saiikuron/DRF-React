from django.urls import path, include
from .views import UserDetailsView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', UserDetailsView, basename="user-profile")

urlpatterns = [
    path('', include(router.urls)),
    path('<int:id>', include(router.urls)),
]
