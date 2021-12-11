import { ApolloServer } from 'apollo-server';

function startServer({ typeDefs, resolvers, context }) {
  const server = new ApolloServer({ typeDefs, resolvers, context });

  server.listen().then(({ url }) => {
    console.log(`✅ server started at ${url}`);
  });
}

export default startServer;
