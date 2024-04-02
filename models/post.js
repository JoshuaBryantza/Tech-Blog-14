const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');


class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);


Post.belongsTo(User);

module.exports = Post;





// const Post = sequelize.define('Post', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   content: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   }
// });