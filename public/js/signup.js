$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");
  var genderInput = $("input#gender-input");
  var ageInput = $("input#age-input");
  var current_heightInput = $("input#current_height-input");
  var current_weightInput = $("input#current_weight-input");
  var goal_weightInput = $("input#goal_weight-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    console.log("in signup.js");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      gender: genderInput.val(),
      age: ageInput.val(),
      current_height: current_heightInput.val(),
      current_weight: current_weightInput.val(),
      goal_weight: goal_weightInput.val(),
    };

    if (
      !userData.email ||
      !userData.username ||
      !userData.password ||
      !userData.gender ||
      !userData.age ||
      !userData.current_height ||
      !userData.current_weight ||
      !userData.goal_weight
    ) {
      return;
    }
    // If we have an email, username and password, run the signUpUser function
    signUpUser(
      userData.email,
      userData.username,
      userData.password,
      userData.gender,
      userData.age,
      userData.current_height,
      userData.current_weight,
      userData.goal_weight
    );
    emailInput.val("");
    usernameInput.val("");
    passwordInput.val("");
    genderInput.val("");
    ageInput.val("");
    current_heightInput.val("");
    current_weightInput.val("");
    goal_weightInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the dashboard page
  // Otherwise we log any errors
  function signUpUser(
    email,
    username,
    password,
    gender,
    age,
    current_height,
    current_weight,
    goal_weight
  ) {
    $.post("/api/signup", {
      email: email,
      username: username,
      password: password,
      gender: gender,
      age: age,
      current_height: current_height,
      current_weight: current_weight,
      goal_weight: goal_weight,
    })
      .then(function () {
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text("Cannot create account!");
    $("#alert").fadeIn(500);
  }
});
