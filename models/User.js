const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
      },
  username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
  gender: {
      type: DataTypes.STRING,
      allowNull: false
      },
  age: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
  current_height: {
      type: DataTypes.STRING,
      allowNull: false
      },   
  current_weight: {
      type: DataTypes.DECIMAL,
      allowNull: false
      },
  goal_weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      }, 
  current_date: {
      type: DataTypes.STRING,
      allowNull: false,
      },
/*  calories_goal: {
      type: DataTypes.INTEGER,
      allowNull: true
      },
    weekly_loss_goal: {
      type: DataTypes.INTEGER,
      allowNull: true
      }, 
    target_calories: {
      type: DataTypes.INTEGER,
      allowNull: true
      },  
*/
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password2: {
        type: DataTypes.STRING,
        allowNull: false,
      } 
});

/* User has daily logs of Calorie_counter
User.associate = function(models) {
//   Associating User with Calorie_counter
//   When an Calorie_user is deleted, also delete any associated Calorie_counter
  User.hasMany(models.Calorie_counter, {
    onDelete: "cascade"
  });
*/

// Before the user is created, automatically hash their password.
  User.addHook('beforeCreate', function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
return User;
};

