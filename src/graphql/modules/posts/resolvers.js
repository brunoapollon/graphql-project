import { Post } from '../../../models/Post';

export default {
  Query: {
    listAllPosts: () => Post.find(),
    showPost: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
  },
  deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
};
