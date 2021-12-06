import { mergeTypeDefs } from '@graphql-tools/merge';

import userTypes from './modules/users/userSchema';
import postTypes from './modules/posts/postSchema';

const types = [userTypes, postTypes];

const typeDefs = mergeTypeDefs(types);

export default typeDefs;
