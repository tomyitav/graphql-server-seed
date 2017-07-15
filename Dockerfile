FROM node:latest
WORKDIR /software/graphql-server
ADD . /software/graphql-server
RUN npm install
CMD ["npm", "start"]

MAINTAINER tomyitav@gmail.com