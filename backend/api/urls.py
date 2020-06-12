from django.urls import path, include
from .views import ModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ModelViewSet, basename="article")

urlpatterns = [
    path('', include(router.urls)),
    path('<int:id>', include(router.urls)),
]
