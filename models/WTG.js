
module.exports = function(sequelize, DataTypes) {
    var Calorie_user = sequelize.define("Calorie_user", {
    date: {
        type: DataTypes.STRING},
    age: {
        type: DataTypes.STRING},
    
    gender: {
        type: DataTypes.STRING},
    height_in_inches: {
        type: DataTypes.STRING},

    current_weight_lbs: {
        type: DataTypes.STRING},   
    goal: {
        type: DataTypes.STRING},

});

return Calorie_user;
};

