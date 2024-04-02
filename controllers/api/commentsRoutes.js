const express = require('express');
const CommentController = require('../controllers/commentController');

const router = express.Router();

// Define comment routes
router.get('/comments', CommentController.getAllComments);
router.post('/comments', CommentController.createComment);
// Add more routes for comment-related operations as needed

module.exports = router;