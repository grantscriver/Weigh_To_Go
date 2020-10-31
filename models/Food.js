module.exports = function (sequelize, DataTypes) {
  var Calorie_counter = sequelize.define("Calorie_counter", {
    foodname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_calories_uom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    servings_consumed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_calories: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Calorie_counter;
};
