const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Post = require('./post');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
  },
});

Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = Comment;