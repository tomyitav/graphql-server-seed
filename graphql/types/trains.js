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
  updateTrain (
    id: String!
    name: String
    speed: Int
    diesel: Boolean
  ): Train
  deleteTrain (
    name: String!
  ) : Train
}

# the schema allows the following query:
type Query {
  train(name: String): [Train]
}

type Subscription {
  trainUpdated: Train
  trainAdded: Train
  trainDeleted: Train
}

`;

export default schema;