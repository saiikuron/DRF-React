from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Article(models.Model):
    title = models.CharField(max_length=100)
    user = models.OneToOneField(
        User, related_name='Article', on_delete=models.CASCADE)
    # username = models.OneToOneField(
    #     User.username, related_name='Article', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
