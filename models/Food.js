module.exports = function (sequelize, DataTypes) {
  var food = sequelize.define("food", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    foodEaten: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caloriesEaten: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return food;
};
