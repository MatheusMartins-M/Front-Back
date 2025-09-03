from django.db import models
from .base_model import BaseModel
from django.core.validators import MinLengthValidator, MinValueValidator

class Produto(BaseModel):
    cod = models.CharField(
        blank=False, null=False, max_length=10,
        validators=[MinLengthValidator(1)]
    )
    nome = models.CharField(
        blank=False, null=False, max_length=10,
        validators=[MinLengthValidator(1)]
    )
    valor = models.FloatField(
        blank=False, null=False,
        validators=[MinValueValidator(0)]
    )

    def __str__(self):
        return (f"{self.cod} - {self.nome} - R${self.valor}")