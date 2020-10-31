$(document).ready(function () {
  // Getting references to our form and inputs
  var calorie_userForm = $("form.calorie_user");
  var usernameInput = $("input#username-input");
  var ageInput = $("input#age-input");
  var current_heightInput = $("input#current_height-input");
  var current_weightInput = $("input#current_weight-input");
  var goal_weightInput = $("input#goal_weight-input");
  var genderButtonValue = $(".gender.val()");

  // When the form is submitted, we validate there's an email and password entered
  calorie_userForm.on("submit", function (event) {
    console.log("in calorie_user.js");
    event.preventDefault();
    var calorie_userData = {
      username: usernameInput.val(),
      gender: genderButtonValue.val(),
      age: ageInput.val(),
      current_height: current_heightInput.val(),
      current_weight: current_weightInput.val(),
      goal_weight: goal_weightInput.val(),
    };

    if (
      !calorie_userData.username ||
      !calorie_userData.gender ||
      !calorie_userData.age ||
      !calorie_userData.current_height ||
      !calorie_userData.current_weight ||
      !calorie_userData.goal_weight
    ) {
      return;
    } else {
      // calorie_userUser does a post to our "api/login" route and if successful, redirects us the the dashboard page
      function calorie_userUser() {
        $.post("/api/calorie_user", {
          username: username,
          gender: gender,
          age: age,
          current_height: current_height,
          curretn_weight: current_weight,
          goal_weight: goal_weight,
        })
          .then(function () {
            window.location.replace("/dashboard");
            // If there's an error, log the error
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  });
});
