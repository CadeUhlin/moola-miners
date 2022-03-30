FROM python:alpine

RUN pip install Flask
RUN pip install requests

COPY worker.py
CMD ["python", "worker.py"]
