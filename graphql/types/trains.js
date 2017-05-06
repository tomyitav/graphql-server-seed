const schema = `
type Train {
 _id : String
 name: String
 speed: Int
 diesel: Boolean
}

type Mutation {
  addTrain (
    name: String!
    speed: Int!
    diesel: Boolean!
  ): Train
}

# the schema allows the following query:
type Query {
  train(name: String): [Train]
}

`;

export default schema;