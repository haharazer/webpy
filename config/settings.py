#!/usr/bin/python
# coding=utf-8
import web

web.config.debug = False
render = web.template.render('templates/', base='base')