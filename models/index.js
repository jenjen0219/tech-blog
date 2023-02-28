const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//A user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//A user can have many posts    
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//A post can have many comments
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// A post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//A comment can only belong to one post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//A comment can only belong to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };
