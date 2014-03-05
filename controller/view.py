__author__ = 'hanpeng03'
import web
from config.settings import *


class index:
    def GET(self):
        return render.index('hello world')
