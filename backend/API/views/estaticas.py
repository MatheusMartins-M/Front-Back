from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from API.models import Produto

class testeView(APIView):
    def listar_produtos(request):
        produtos = Produto.objects.all().values("id", "cod", "nome", "valor")
        return JsonResponse(list(produtos), safe=False)