from flask import Flask, Response
import os
import socket
import time

app = Flask(__name__)

# Enable debugging if the DEBUG environment variable is set and starts with Y
app.debug = os.environ.get("DEBUG", "").lower().startswith('y')

hostname = socket.gethostname()

urandom = os.open("/dev/urandom", os.O_RDONLY)


@app.route("/")
def index():
    return "APP running on {}\n".format(hostname)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, threaded=False)
