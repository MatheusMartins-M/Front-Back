from django.urls import path
from .views.estaticas import testeView

app_name = 'API'

urlpatterns = [
    path('produtos/', testeView.listar_produtos, name = "listar_produtos")
]