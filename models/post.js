const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    post_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_Id',
      },
    },
    user_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_Name',
      },
    },
    created_At: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_At: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
