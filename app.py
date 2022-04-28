from flask import Flask, render_template, url_for, request, redirect
import csv

app = Flask(__name__)
print(__name__)


@app.route('/')
def my_home():
    return render_template('./webui/public/index.html')


@app.route('/index.html')
def my_home2():
    return render_template('./webui/public/index.html')