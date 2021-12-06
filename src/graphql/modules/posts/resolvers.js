import { Post } from '../../../models/Post';

export default {
  Query: {
    listAllPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
    showPost: async (_, { id }) => {
      const post = await Post.findById(id);
      return post;
    },
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
