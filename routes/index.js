// Get references to page elements
$(".currentDate").text(moment().format("l"));

$(".submit").on("click", function () {
  console.log("clicked button!");
  let mealEntry = $("input").val();
  if (mealEntry != "") {
    fatsecret.addRef("caloriestotal", "fatsecret_caloriestotal");
    $(".mealDisplay").append("<td>" + mealEntry + "</td>");
  } else {
    $(".error").text("Field cannot be left empty");
  }
});
