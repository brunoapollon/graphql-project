import { Post } from '../../../models/Post';
import { User } from '../../../models/User';

export default {
  Post: {
    author: async post => {
      const authorFinded = await User.findById(post.author);
      return authorFinded;
    },
  },
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
    updatePost: async (_, { id, data }) => {
      const updatePost = await Post.findOneAndUpdate(id, data, { new: true });
      return updatePost;
    },
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
    likePost: async (_, { id }) => {
      const post = await Post.findById(id);
      const updatePostLikes = await Post.findOneAndUpdate(id, {
        likes: post.likes + 1,
      });
      return !!updatePostLikes;
    },
  },
};
