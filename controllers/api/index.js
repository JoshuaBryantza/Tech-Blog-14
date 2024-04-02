const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

const router = express.Router();

// Include user routes
router.use('/api', userRoutes);

// Include post routes
router.use('/api', postRoutes);

// Include comment routes
router.use('/api', commentRoutes);

module.exports = router;