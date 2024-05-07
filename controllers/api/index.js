const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentsRoutes');

// const router = express.Router();

// Include user routes
// router.use('/api', userRoutes);
router.use('/users', userRoutes);

// Include post routes
// router.use('/api', postRoutes);
router.use('/posts', postRoutes);

// Include comment routes
// router.use('/api', commentRoutes);
router.use('/comments', commentRoutes);

module.exports = router;