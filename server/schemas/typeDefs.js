const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]
  }
  
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query{
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, image: String!, link: String!, title: String!, bookId: String!): User 
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
