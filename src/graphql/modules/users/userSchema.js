export default `
type User {
  _id: ID!
  firstName: String!
  lastName: String!
  email: String!
  active: Boolean!
}

input UserInput {
  firstName: String!
  lastName: String!
  email: String!
  active: Boolean!
}

type Query {
  listAllUsers: [User!]!
  showUser(id: ID!): User!
}

type Mutation {
  createUser(data: UserInput!): User!
  updateUser(id: ID!, data: UserInput!): User!
  deleteUser(id: ID!): Boolean
}

`;