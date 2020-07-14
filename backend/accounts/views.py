from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from dj_rest_auth.app_settings import UserDetailsSerializer
from rest_framework.permissions import IsAuthenticated

UserModel = get_user_model()


class UserDetailsView(viewsets.ModelViewSet):
    serializer_class = UserDetailsSerializer
    queryset = UserModel.objects.all()
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return UserModel.objects.all()

