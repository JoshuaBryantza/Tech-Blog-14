const Post = require('../models/post');

// Controller for post-related operations
const PostController = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  // Create a new post
  createPost: async (req, res) => {
    const { title, content, authorId } = req.body;
    try {
      const newPost = await Post.create({ title, content, authorId });
      res.json(newPost);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },
  // Other post-related operations (update, delete, etc.)
};

module.exports = PostController;