module.exports = function (sequelize, DataTypes) {
  var Calorie_counter = sequelize.define("Calorie_counter", {

      foodname: {
          type: DataTypes.STRING,
          allowNull: false
      },
      food_calories_uom: {
          type: DataTypes.NUMERIC,
          allowNull: true
      },
      servings_consumed: {
          type: DataTypes.NUMERIC,
          allowNull: true
      },
      total_calories: {
          type: DataTypes.NUMERIC,
          allowNull: true
      },
  });

  return Calorie_counter;

};
