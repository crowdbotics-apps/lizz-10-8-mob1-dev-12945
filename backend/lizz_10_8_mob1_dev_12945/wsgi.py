"""
WSGI config for lizz_10_8_mob1_dev_12945 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lizz_10_8_mob1_dev_12945.settings')

application = get_wsgi_application()
