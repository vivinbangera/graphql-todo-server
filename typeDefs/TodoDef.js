const { gql } = require('apollo-server-express');

const TodoDef = gql`
  type Todo {
    _id: ID
    title: String!
    createdDate: String
    isComplete: Boolean
  }
  extend type Query {
    getAllTodos: [Todo]
    getTodo(_id: ID): Todo
  }

  extend type Mutation {
    createTodo(title: String!, isComplete: Boolean): Todo
    deleteTodo(_id: ID): Todo
  }
`;

module.exports = TodoDef;
//updateTodo(title: String, isComplete: Boolean): Todo
