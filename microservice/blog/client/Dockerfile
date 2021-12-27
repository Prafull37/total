#Installing the node:alpine as base image

FROM node:alpine

# Set working Dir

WORKDIR /usr/app

#Copy package.json

COPY ./package.json ./

# Install Dependencies

RUN npm install

#Adding Other files

COPY ./ ./

# commanding to run

CMD ['npm', 'start']
