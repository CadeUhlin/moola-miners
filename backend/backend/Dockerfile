FROM python:alpine
RUN pip install Flask
COPY backend.py /
CMD [ "python", "-m", "venv", "venv" ; "source", "venv/bin/activate" ; "FLASK_APP", "="app.py"" ; "flask", "run" ]
EXPOSE 80
