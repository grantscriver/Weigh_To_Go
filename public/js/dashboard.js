
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

