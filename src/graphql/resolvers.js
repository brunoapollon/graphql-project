import { mergeResolvers } from '@graphql-tools/merge';

import userResolvers from './modules/users/resolvers';
import postResolvers from './modules/posts/resolvers';

const resolversArray = [userResolvers, postResolvers];

const resolvers = mergeResolvers(resolversArray);

export default resolvers;
