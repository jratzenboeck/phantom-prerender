FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json .

RUN npm install

# Bundle app source
COPY ./*.js ./

EXPOSE 8080
CMD [ "npm", "start" ]