FROM node:latest

COPY ./node_modules .
COPY ./package-lock.json . 
COPY ./package.json .
COPY ./webpack.config.js . 

