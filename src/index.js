import { PubSub } from 'graphql-subscriptions';
import startServer from './startServer';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

export const pubsub = new PubSub();

startServer({ typeDefs, resolvers, context: { PubSub } });
