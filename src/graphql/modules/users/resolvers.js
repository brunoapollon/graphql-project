import { User } from '../../../models/User';
import { USER_ADDED } from './chanels';

export default {
  User: {
    fullName: user => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    listAllUsers: async () => {
      const users = await User.find();
      return users;
    },
    showUser: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
  },
  Mutation: {
    createUser: async (_, { data }, { pubsub }) => {
      const user = await User.create(data);

      pubsub.publish(USER_ADDED, { userAdded: user });

      return user;
    },
    updateUser: async (_, { id, data }) => {
      const updateUser = await User.findOneAndUpdate(id, data, { new: true });
      return updateUser;
    },
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator([USER_ADDED]),
    },
  },
};
