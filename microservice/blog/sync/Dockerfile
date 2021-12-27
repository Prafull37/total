# Installing base Image

FROM node:alpine

# defining Working Directory

WORKDIR /usr/app

# Adding package.json to container working directory

ADD ./package.json ./

# Installing all the dependencies using npm install

RUN npm install

#COPY index.js to container working directory

COPY ./index.js ./

#EXPOSE A port for inter-container communication.Another server inside that container can access it.

EXPOSE 4009

# Providing Command to  the project using npm start

CMD ["npm","start"]
