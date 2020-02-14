const { ApolloServer, gql } = require('apollo-server');
const users = require('./users');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [users.typeDef],
  resolvers: [users.resolvers],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});