export default `
type Post {
  _id: ID!
  title: String!
  content: String!
  likes: Int!
  author: User!
}

input PostInput {
  title: String!
  content: String!
  likes: Int!
  author: ID!
}

type Query {
  listAllPosts: [Post!]!
  showPost(id: ID!): Post!
}

type Mutation {
  createPost(data: PostInput!): Post!
  updatePost(id: ID!, data: PostInput!): Post!
  deletePost(id: ID!): Boolean
}

`;
