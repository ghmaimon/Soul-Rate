# Soul-Rate

    complete web application to publish, rate and give feedback about movies and series, with membership system and advanced search with tags, titles and names of actors.

# run back-end docker image:

    cd Back-End
    (linux) sudo chmod 666 /var/run/docker.sock
    docker build .
    docker-compose build

# for test the api:
    docker-compose run api sh -c "python3 manage.py test && flake8"