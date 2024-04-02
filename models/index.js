const User = require('./user');
const Post = require('./post');
const Comments = require('./comments');

Post.hasMany(Comments, {
  foreignKey: 'gallery_id',
});

Comments.belongsTo(Post, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Post, Comments };