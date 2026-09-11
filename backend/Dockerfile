FROM python:3.12-slim

WORKDIR /code

RUN apt-get update && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

COPY ./app /code/app
COPY requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir \
    setuptools==84.0.0 \
    wheel==0.46.3 && \
    pip install --no-cache-dir -r /code/requirements.txt

RUN useradd --create-home appuser && \
    chown -R appuser:appuser /code

USER appuser

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
