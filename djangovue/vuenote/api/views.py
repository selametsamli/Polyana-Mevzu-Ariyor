from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from vuenote.models import Note
from vuenote.api.serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = (
        AllowAny,
    )
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'id'
