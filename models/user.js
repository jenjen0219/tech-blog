const { Model, DataTypes } = require('sequelize');

//bcrypt is a hashing function that will take the password and hash it 10 times and then return the hashed password as a means of security
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//this defines the User class as a subclass of the sequalize model class which is needed for the following user.init() method
class User extends Model { }

//used to define the schema of the user model(table)
User.init(
    {
        user_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    },
    {
        //all of our hooks are thrown into the same object and will be called in at specific times within the lifecycle of the model
        hooks: {
            //this is a property to our object that is a function that will run before a new user is created
            beforeCreate: async (newUser) => {
                try {
                    newUser.password = await bcrypt.hash(newReader.password, 10);
                    return newUser;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
            //the other property is a function that will run RIGHT before a user is updated
            //honestly, this isn't really needed since there isn't even an option to update or change a password... but it's here for the sake of completion    
            beforeUpdate: async (updatedUser) => {
                try {
                    updatedUser.password = await bcrypt.hash(
                        updatedUser.password,
                        10
                    );
                    return updatedUser;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
        },
        //this is an options object which is the second parameter of the init() method and it is used to configure the behavior of the user model
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
