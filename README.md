# graphql-server-seed

Easily get started and create your graphql server using:

+ graphql-server-express
+ graphql-subscriptions
+ graphql-tools
+ merge-graphql-schemas
+ mongoose
+ babel-cli

This project demonstrates how to add Queries, Mutations and Subscriptions in a modular way.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/graphql-server-seed.git
npm install
```

## Starting the server

```
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.

## Project structure

We use the function `makeExecutableSchema()` from graphql-tools to to combine our
types and resolvers. Instead of passing one large string for our schema, we
split our types and resolvers to multiple files, located in graphql directory in
types and resolvers directories. This way, we avoid schema complexity by using
merge-graphql-schemas:

```js
  import path from "path";
  import { makeExecutableSchema } from 'graphql-tools';
  import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

  const typesArray = fileLoader(path.join(__dirname, '../types'), { recursive: true });
  const resolversArray = fileLoader(path.join(__dirname, '../resolvers'));
  const allTypes = mergeTypes(typesArray);
  const allResolvers = mergeResolvers(resolversArray);
  const schema = makeExecutableSchema({
      typeDefs: allTypes,
      resolvers: allResolvers
  });

  export default schema;
```

So as your project grows - you can extend the schema by adding new type in types
directory, and adding matching resolver file in resolvers directory. The schema
is updated automatically.

## Debugging with Webstorm

Set babel-node executable as the node interpreter.
Pass node parameters of --preset=babel-preset-es2015

## Create Docker image

After npm intalling the project, go to project root directory, open shell and run:
```
docker build -t graphql-server-seed .
```

Instructions about running the container are available [here](https://hub.docker.com/r/tomyitav/graphql-server-seed/)

## Connect to the server from client app

See the following [example](https://github.com/tomyitav/apollo-angular-client-starter) on how to connect to the server using apollo-angular.
The project demonstrates using Queries, Mutations and Subscriptions.

