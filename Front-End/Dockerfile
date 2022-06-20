FROM node:18
LABEL key="Soul-Rate-front By Ghordou Mimoun"

# create working directory
RUN mkdir /web-app
COPY ./web-app web-app
WORKDIR /web-app


# add the user
RUN useradd -ms /bin/bash soul-rate-admin
RUN chown soul-rate-admin:soul-rate-admin -R .
USER soul-rate-admin 

# install dependecies
RUN npm install

# run the application
CMD [ "npm start" ]

