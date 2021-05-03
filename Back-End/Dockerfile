FROM python:3.9.1
LABEL key="Soul-Rate By Ghordou Mimoun"

ENV PYTHONUNBUFFERED 1

COPY ./requerements.txt /requerements.txt
RUN pip install -r /requerements.txt

RUN mkdir /api
COPY ./api /api
WORKDIR /api

RUN adduser ghmrun
RUN chown ghmrun:ghmrun -R .
USER ghmrun 

