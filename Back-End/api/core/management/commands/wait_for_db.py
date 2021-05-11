import time

from django.db import connections
from django.db.utils import OperationalError
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    # command to pause execution until database is available

    def handle(self, *args, **kwargs):
        self.stdout.write("waiting for database ...")
        conn = None
        while(not conn):
            try:
                conn = connections['default']
            except OperationalError:
                self.stdout.write("database unavailable, waiting 1 second...")
                time.sleep(1)
        self.stdout.write(self.style.SUCCESS("Database available!"))
