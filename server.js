const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Mongoose connections
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to the DB');
  })
  .catch(err => {
    console.log(err);
  });

// Create App instance
const app = express();

// Use Middlewares
app.use(express.json({ extended: true }));
app.use(cors());

// Create Apollo Server and connect to express app.
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
