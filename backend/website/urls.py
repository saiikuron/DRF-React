from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from django.views.generic import RedirectView, TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
            TemplateView.as_view(template_name="password_reset_confirm.html"),
            name='password_reset_confirm'),
    re_path(r'^token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
    re_path(r'^token/refresh/$', TokenRefreshView.as_view(),
            name='token_refresh'),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('account/', include('allauth.urls')),
    path('api/', include('api.urls')),
    path('accounts/', include('accounts.urls')),
]
