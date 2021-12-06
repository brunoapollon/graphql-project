import { User } from '../../../models/User';

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
    createUser: (_, { data }) => User.create(data),
    updateUser: async (_, { id, data }) => {
      const updateUser = await User.findOneAndUpdate(id, data, { new: true });
      return updateUser;
    },
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
};
