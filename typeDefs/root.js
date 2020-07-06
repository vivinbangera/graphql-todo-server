const { gql } = require('apollo-server-express');

const RootDef = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = RootDef;
