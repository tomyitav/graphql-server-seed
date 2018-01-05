const schema = `
type Car {
 _id : String
 name: String
 speed: Int
}

# the schema allows the following query:
type Query {
  car(name: String!): [Car]
}

# this schema allows the following mutation:
type Mutation {
  updateCar (
    currName: String!
    newName: String
    newSpeed: Int
  ): Car
  
  addCar (
    name: String!,
    speed: Int
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
