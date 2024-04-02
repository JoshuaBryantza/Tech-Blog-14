const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Post = require('./post');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = Comment;