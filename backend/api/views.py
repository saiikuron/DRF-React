from rest_framework import viewsets

# Local import
from .models import Article
from .serializers import ArticleSerializer


# ModelViewSet:
class ModelViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
