const schema = `
type Car {
 _id : String
 name: String
}

# the schema allows the following query:
type Query {
  car(name: String): [Car]
}

# this schema allows the following mutation:
type Mutation {
  updateCar (
    currName: String!
    newName: String!
  ): Car
  
  addCar (
    name: String!
  ): Car
  
  deleteCar(name: String!): Car
}

type Subscription {
  carUpdated: Car
  carAdded: Car
  carDeleted: Car
}

`;

export default schema;