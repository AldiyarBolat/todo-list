from api.models import Task
from django.shortcuts import render
from rest_framework.decorators import api_view
from api.serializers import TaskSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST', 'DELETE'])
def tasks(request):
	if request.method == 'GET':  # Get list of all Tasks
		tasks = Task.objects.all()
		serializer = TaskSerializer(tasks, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

	elif request.method == 'POST':  # Create Task
		serializer = TaskSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	elif request.method == 'DELETE':  # Delete Task
		id = request.data['id']
		try:
			task = Task.objects.get(id=id)
		except Task.DoesNotExist as e:
			return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

		task.delete()
		return Response({}, status=status.HTTP_204_NO_CONTENT)

