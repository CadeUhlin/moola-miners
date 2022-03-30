FROM python:alpine

RUN pip install flask
RUN pip install requests

COPY worker.py
CMD ["python", "worker.py"]
