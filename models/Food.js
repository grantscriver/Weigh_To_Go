module.exports = function(sequelize, DataTypes) {
    var food = sequelize.define("food", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    foodname: {
        type: DataTypes.STRING,
        allowNull: false
        },
    serving_size: {
        type: DataTypes.STRING,
        allowNull: false
        },
    calories_per_serving: {
        type: DataTypes.STRING,
        allowNull: false
        },
    servings_consumed:  {
        type: DataTypes.INTEGER,
        allowNull: false
        },
    total_calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calories_goal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remainder_goal: {
        type: DataTypes.STRING,
        allowNull: true
    },    
});
return food;
};