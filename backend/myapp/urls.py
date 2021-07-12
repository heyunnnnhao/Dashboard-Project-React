from django.urls import path
from django.urls.resolvers import URLPattern
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.test),
]
