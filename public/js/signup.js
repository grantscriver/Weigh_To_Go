$(document).ready(function() {
  // Getting references to our form and input
  //var signUpForm = $("form.signup");
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var userDataForm = $("form.userData");
  var usernameInput = $("input#username-input");
  var ageInput = $("input#age-input");
  var current_heightInput = $("input#current_height-input");
  var current_weightInput = $("input#current_weight-input");
  var goal_weightInput = $("input#goal_weight-input");
  var genderButtonValue = $("input[type='button']").click(function(){
    $("input[name='gender']:checked").val();
    });



  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    console.log("in signup.js");
    event.preventDefault();
    var userData = {
      email: emailInput.val(),
      password: passwordInput.val(),
      username: usernameInput.val(),
      gender: genderButtonValue.val(),
      age: ageInput.val(),
      current_height: current_heightInput.val(),
      current_weight: current_weightInput.val(),
      goal_weight: goal_weightInput.val(),
    };

    if (!userData.email || !userData.password || !userData.username || !userData.gender || !userData.age || !userData.current_height || !userData.current_weight || !userData.goal_weight) {
      return;
    } 
    // If we have an email and password, run the signUpUser function
    signUpUser (userData.email, userData.password, userData.username, userData.gender, userData.age, userData.current_height, userData.current_weight, userData.goal_weight);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val();
    genderButtonValue.val();
    ageInput.val();
    current_heightInput.val();
    current_weightInput.val();
    goal_weightInput.val();
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, username, gender, age, current_height, current_weight, goal_weight) {
    $.post("/api/signup", {
          email: email,
          password: password,
          username: username,
          gender: gender,
          age: age,
          current_height: current_height,
          current_weight: current_weight,
          goal_weight: goal_weight,
        })
          .then(function(data) {
            window.location.replace("/dashboard");
        // If there's an error, handle it by throwing up a bootstrap alert
          })
          .catch(handleLoginErr);
      }
    signUpUser();
    
    function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    }

});

 
