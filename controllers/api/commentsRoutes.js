const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// const router = express.Router();

// Define comment routes
router.get('/', (req, res) => { });

router.post('/', withAuth, async (req, res) => {

  console.log('');
  try {
    const newComments = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComments);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Add more routes for comment-related operations as needed

module.exports = router;