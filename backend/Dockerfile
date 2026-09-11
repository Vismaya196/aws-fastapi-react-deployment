FROM python:3.8-slim

WORKDIR /code

COPY ./app /code/app
COPY requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir -r /code/requirements.txt

RUN useradd --create-home appuser
USER appuser

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
