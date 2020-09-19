from rest_framework import serializers
from api.models import Task


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    status = serializers.CharField()

    def create(self, validated_data):
        task = Task(**validated_data)
        task.save()
        return task

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


