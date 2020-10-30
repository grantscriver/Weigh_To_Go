

$(document).ready(function () {
  // Getting references to our form and input
  //var signUpForm = $("form.signup");
  var calorieForm = $("form.Calorie_counter");
  var foodEaten = $("input#foodEaten");
  var numberOfservings = $("input#numberOfservings");
  var caloriesPerServing = $("input#caloriesPerServing");

  // When the add button is clicked, we validate the email and password are not blank
  $(".calorie-counter").on("submit", function (event) {
    event.preventDefault();
    var calorieData = {
      foodname: $("#foodEaten").val().trim(),
      servings_consumed: $("#numberOfServings").val().trim(),
      food_calories_uom: $("#caloriesPerServing").val().trim(),
      total_calories: $("#numberOfServings").val().trim() * $("#caloriesPerServing").val().trim()
    };
    // If we have an email and password, run the signUpUser function
    addCalorieData(calorieData.foodname, calorieData.servings_consumed, calorieData.food_calories_uom, calorieData.total_calories);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addCalorieData(foodname, servings_consumed, food_calories_uom, total_calories) {
    console.log(foodname, servings_consumed, food_calories_uom, total_calories)
    $.post("/api/calorie", {
      foodname: foodname,
      servings_consumed: servings_consumed,
      food_calories_uom: food_calories_uom,
      total_calories: total_calories
    })
      .then(function (data) {
        console.log(data)
        window.location.replace("/Calorie_counter");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

});