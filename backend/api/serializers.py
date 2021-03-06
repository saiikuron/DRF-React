from rest_framework import serializers
from accounts.serializers import PublicProfileSerializer
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(
        read_only=True, default=serializers.CurrentUserDefault())

    class Meta:
        model = Article
        fields = ['id', 'title', 'user']

    def save(self, **kwargs):
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)
