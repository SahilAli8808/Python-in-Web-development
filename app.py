from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/message")
def get_message():
    return "Hello, World!"

if __name__ == "__main__":
    app.run()
