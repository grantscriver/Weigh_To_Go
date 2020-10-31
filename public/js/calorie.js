


$(document).ready(function () {
  // Getting references to our form and input
  //var signUpForm = $("form.signup");
  var calorieForm = $("form.Calorie_counter");
  var foodEaten = $("input#foodEaten");
  var numberOfservings = $("input#numberOfservings");
  var caloriesPerServing = $("input#caloriesPerServing");

  // setting up the calorie counter variables when the user submits calorie data
  $(".calorie-counter").on("submit", function (event) {
    event.preventDefault();
    var calorieData = {
      foodname: $("#foodEaten").val().trim(),
      servings_consumed: $("#numberOfServings").val().trim(),
      food_calories_uom: $("#caloriesPerServing").val().trim(),
      total_calories: $("#numberOfServings").val().trim() * $("#caloriesPerServing").val().trim()
    };
    // call a function that will run a post for the calorie data
    addCalorieData(calorieData.foodname, calorieData.servings_consumed, calorieData.food_calories_uom, calorieData.total_calories);
  });

  $(".clear-calorie").on("submit", function (event) {
    event.preventDefault();

    $.get("/api/clear_calorie")

    location.reload();

  });

  // Does a post to the calorie route
  // Otherwise we log any errors
  function addCalorieData(foodname, servings_consumed, food_calories_uom, total_calories) {

    $.post("/api/calorie", {
      foodname: foodname,
      servings_consumed: servings_consumed,
      food_calories_uom: food_calories_uom,
      total_calories: total_calories
    })
      .then(function (data) {

        window.location.replace("/Calorie_counter");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

});