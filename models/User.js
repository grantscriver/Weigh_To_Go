const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
  desire_weight: {
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


//Calorie_user.associate = function(models) {
  // Associating User with Calorie_counter
  // When an Calorie_user is deleted, also delete any associated Calorie_counter
  //User.hasMany(models.Calorie_counter, {
  //  onDelete: "cascade"
  //});
return User;
};
