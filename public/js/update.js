$(document).ready(function() {
    //Updated weight input from user
    var id 
    var updatedWeightForm = $("form.update");
    var updated_weightInput = $("input#updated_weight-input");
    // GET request to figure out which user is logged in and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
        console.log(data.id);
    //Get username, current_weight, goal_weight
      $(".username").text(data.username);
      $(".current_weight").text(data.current_weight);
      $(".goal_weight").text(data.goal_weight);
      id = data.id;

    //Mathematical equation "current_weight - goal_weight" = lbs to goal
      $(".goal_difference").text(data.current_weight - data.goal_weight);
    });

    //When the user inputs an updated weight and presses submit  
      updatedWeightForm.on("submit", function(event) {
        event.preventDefault();

        var updated_weight = updated_weightInput.val();
/*
    //if the user DOESN'T enter an updated weight, nothing changes
        if (!updated_weight) {
            return;
        } 
*/
    //if the user DOES enter an updated weight, grab that value...
        updateWeight(updated_weight);
        updated_weightInput.val("");

    //And patch it into the user's db entry
        function updateWeight() {
            $.ajax({ 
                method: "PATCH",
                url: "/api/update", 
                data: { id: id, current_weight: updated_weight },
            })
            .then(function() {
    //Run another get to refresh the page with an updated current weight and difference to goal
                $.get("/api/user_data").then(function(data) {
                    console.log(data);
    //Refresh username, current_weight (replaced by updated_weight), goal_weight
                    $(".username").text(data.username);
                    $(".current_weight").text(data.current_weight);
                    $(".goal_weight").text(data.goal_weight);
  
    //Mathematical equation "current_weight - goal_weight" = lbs to goal
                    $(".goal_difference").text(data.current_weight - data.goal_weight);
                });

            })
        }
    });
  
});
  
  
  

  
  