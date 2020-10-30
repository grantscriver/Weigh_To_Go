
$(document).ready(function () {
  console.log("in dashboard.js");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    //    if (!username)
    $(".username").text(data.username);
    $(".current_weight").text(data.current_weight);
    $(".goal_weight").text(data.goal_weight);
    $(".goal_difference").html(
      Math.round(data.current_weight - data.goal_weight)
    );
  });
});

//API call to User
//Get username, current_weight, goal_weight
//Radio button, if yes, reveal update weight
//PUT update weight into API User object
//New API call to updat current_weight
//Mathematical equations "current_weight - goal_weight"
//Male: 66 + (6.3 x lbs) + (12.9 x inches) - (6.8 x yrs) = Total calories to maintain - 500 to lose
//Female: 655 + (4.3 x lbs) + (4.7 x inches) - (4.7 x yrs)  = Total calories to maintain - 500 to lose