const express = require('express');
const sequelize = require('./config/connection');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;




// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the blog site!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






















// const express = require('express');
// const { Sequelize } = require('sequelize');
// const User = require('./models/user');
// const Post = require('./models/post');
// const Comment = require('./models/comment');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Configure the Sequelize instance with your MySQL database connection details
// const sequelize = new Sequelize('database_name', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Associate the models
// User.init(sequelize);
// Post.init(sequelize);
// Comment.init(sequelize);

// // Define model associations
// User.hasMany(Post);
// Post.belongsTo(User);
// Post.hasMany(Comment);
// Comment.belongsTo(User);
// Comment.belongsTo(Post);

// // Synchronize the models with the database
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database synced successfully');
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the blog site!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });