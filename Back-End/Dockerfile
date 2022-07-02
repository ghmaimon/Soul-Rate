FROM python:3.8.7
LABEL key="Soul-Rate By Ghordou Mimoun"

ENV PYTHONUNBUFFERED 1

COPY ./requerements.txt /requerements.txt

RUN python3 -m pip install -r requerements.txt --no-cache-dir

RUN mkdir /api
COPY ./api /api
WORKDIR /api

RUN adduser ghmrun
RUN chown ghmrun:ghmrun -R .
USER ghmrun 
CMD [ "python3 manage.py runserver 0.0.0.0:8000" ]

