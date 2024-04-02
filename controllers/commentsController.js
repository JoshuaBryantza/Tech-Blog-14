const Comment = require('../models/comment');

// Controller for comment-related operations
const CommentController = {
  // Get all comments
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  // Create a new comment
  createComment: async (req, res) => {
    const { content, authorId, postId } = req.body;
    try {
      const newComment = await Comment.create({ content, authorId, postId });
      res.json(newComment);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },
  // Other comment-related operations (update, delete, etc.)
};

module.exports = CommentController;