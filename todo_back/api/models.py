from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=200)

    def __str__(self):
        return '{}: {}'.format(self.name, self.status)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'status': self.status,
        }