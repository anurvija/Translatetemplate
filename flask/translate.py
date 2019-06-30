import os
from flask import Flask, render_template, request, jsonify
import string
import random

app = Flask(__name__)
APP_ROOT = "E:/Sample/Anu/"

@app.route("/")
def index():
    name = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(5))
    return render_template("translate.html",name=name) 

@app.route("/uploadhc", methods=['POST'])
def uploadhc():
    target = "E:/Sample/Anu/"
    if 'file' not in request.files:
        error = "Missing data source!"
        return jsonify({'error': error})
    file = request.files['file']
    otpValue = request.form['otp']
    target = os.path.join(APP_ROOT, otpValue)
    if not os.path.isdir(target):
        os.mkdir(target)
    fileName = "DCData.csv"
    destination = '/'.join([target, fileName])
    file.save(destination)
    success = "Success!"
    return jsonify({'file': success})

@app.route("/downloadhc", methods=['POST'])
def downloadhc():
    target = "E:/Sample/"
    filename = 'anu.txt'
    return send_from_directory(directory='uploads', filename=filename) 


if __name__ == "__main__":
    app.run(host ='0.0.0.0', port ='80')
