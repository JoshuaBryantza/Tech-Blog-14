const { User } = require('../models/user');

// Controller for user-related operations
const UserController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  // Create a new user
  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password });
      res.json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },
  // Other user-related operations (update, delete, etc.)
};

module.exports = UserController;