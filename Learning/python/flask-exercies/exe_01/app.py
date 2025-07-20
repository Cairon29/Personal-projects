# This is the minimal flask application


# Run: python run --debug app.py

from flask import Flask

app = Flask(__name__)

@app.route("/")
def app():
    return 'This is an awesome app'

if __name__ == '__main__':
    app.run(debug=True, port=5555)