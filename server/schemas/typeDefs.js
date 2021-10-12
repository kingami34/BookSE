const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    saveBooks: []

  type Book {
    _id: ID
  }

  type Query{
    books: [Book]
    me: User
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
