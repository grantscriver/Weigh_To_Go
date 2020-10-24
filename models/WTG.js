
module.exports = function(sequelize, DataTypes) {
    var Authentication = sequelize.define("Authentication", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type:DataTypes.STRING,
            allowNull: false,
        }

    });
return Authentication;
}
    
module.exports = function(sequelize, DataTypes) {
    var Calorie_user = sequelize.define("Calorie_user", {
    username: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    height_in_inches: {
        type: DataTypes.STRING
    },
    current_weight_lbs: {
        type: DataTypes.STRING
    },   
    goal_weight: {
        type: DataTypes.STRING
    },

});

return Calorie_user;
};

module.exports = function(sequelize, DataTypes) {
    var Calorie_counter = sequelize.define("Calorie_counter", {
        username: {
            type: DataTypes.STRING
        },
        meal_date: {
            type: DataTypes.STRING
        },
        consumed_food: {
            type: DataTypes.STRING
        },
        food_uom: {
            type: DataTypes.STRING
        },
        consumed_per_uom: {
            type: DataTypes.STRING
        },
        calories_per_uom: {
            type: DataTypes.STRING
        }, 
        total_calories_consumed: {
            type: DataTypes.STRING
        },
        calories_goal: {
            type: DataTypes.STRING
        },
        remainder_goal: {
            type: DataTypes.STRING
        }, 
        goal_deficit: {
            type: DataTypes.STRING
        }, 

});

return Calorie_counter;
};