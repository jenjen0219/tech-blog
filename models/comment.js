const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
            model: 'post',  
            key: 'post_Id',
        },
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_Id',
      },
    },
    commented_By: {
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
    modelName: 'comment',
  }
);

module.exports = Comment;
