FROM node:5.3.0

ENV PROJECT /tw2pocket
RUN mkdir $PROJECT
WORKDIR $PROJECT

ADD package.json $PROJECT/package.json
RUN npm install

ADD . $PROJECT
CMD ["npm", "start"]
