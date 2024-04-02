const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

// Define post routes
router.get('/posts', PostController.getAllPosts);
router.post('/posts', PostController.createPost);
// Add more routes for post-related operations as needed

module.exports = router;