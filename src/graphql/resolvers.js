import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const reesolversArray = fileLoader(
  path.join(__dirname, 'modules', '**', '*.js'),
);

const resolvers = mergeResolvers(reesolversArray);

export default resolvers;
