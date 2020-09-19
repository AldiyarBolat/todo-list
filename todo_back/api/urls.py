from django.urls import path, re_path
from api.views import tasks

urlpatterns = [
	path('api/tasks', tasks),
]
