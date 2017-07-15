FROM node:latest
WORKDIR /software/graphql-server
ADD . /software/graphql-server

CMD ["npm", "start"]

MAINTAINER tomyitav@gmail.com