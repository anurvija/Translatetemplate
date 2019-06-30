from flask import Flask, flash, redirect, render_template, request, session, abort

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/translate")
def tranlsate():
    return render_template('template.html')



if __name__ == "__main__":
    app.run(host ='0.0.0.0', port ='80')
