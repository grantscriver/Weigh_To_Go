
$(document).ready(function() {
  // GET request to figure out which user is logged in and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    console.log(data);
  //Get username, current_weight, goal_weight
    $(".username").text(data.username);
    $(".current_weight").text(data.current_weight);
    $(".goal_weight").text(data.goal_weight);

  //Equation to determine caloric intake based on gender
      if (data.gender === "female") {
  //If Female: 655 + (4.3 x lbs) + (4.7 x inches) - (4.7 x yrs)  = Total calories to maintain - 1000 to lose two pounds
        
        var calories_per_day = Math.floor(((655 + (4.3 * data.current_weight) + (4.7 * data.current_height) - (4.7 * data.age))*1.55) - 1000)
        displayCalories(calories_per_day);
      } else if (data.gender === "male") {
  //If Male: 66 + (6.3 x lbs) + (12.9 x inches) - (6.8 x yrs) = Total calories to maintain - 1000 to lose two pounds
        var calories_per_day = Math.floor(((66 + (6.3 * data.current_weight) + (12.9 * data.current_height) - (6.8 * data.age))*1.55) - 1000)
        displayCalories(calories_per_day);
      } /*else {
        return (err);
      }*/
 
  //Mathematical equation "current_weight - goal_weight" = lbs to goal
    $(".goal_difference").text(data.current_weight - data.goal_weight);

  //Function to display caloric intake based on gender
    function displayCalories () {
      $(".calories_per_day").text(calories_per_day);
    }
    
  });

});




