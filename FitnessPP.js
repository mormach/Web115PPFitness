function generateMealPlan() {
  // Get User Input
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var goal = document.getElementById("goal").value;
  var sundayMeal = document.getElementById("sunday").value;
  var mondayMeal = document.getElementById("monday").value;
  var tuesdayMeal = document.getElementById("tuesday").value;
  var wednesdayMeal = document.getElementById("wednesday").value;
  var thursdayMeal = document.getElementById("thursday").value;
  var fridayMeal = document.getElementById("friday").value;
  var saturdayMeal = document.getElementById("saturday").value;

  myText = "<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n";
  myText += name + ", here is your meal plan for the week.";
  myText += "</body>\n</html>";

  plan = window.open(
    "about:blank",
    "myPop",
    "width=device-width, height=device-height,left=540,top=200"
  );
  plan.document.write(myText);
  plan.document.write("<html><head><title>Meal Plan</title></head><body>");
  // Populate meal plan
  plan.document.write("<h1>Meal Plan for " + name + "</h1>");
  plan.document.write(
    "<p><strong>Goal for the Week:</strong> " + goal + "</p>"
  );
  // Add meal plan details
  plan.document.write("<h2>Sunday</h2><p>" + sundayMeal + "</p>");
  plan.document.write("<h2>Monday</h2><p>" + mondayMeal + "</p>");
  plan.document.write("<h2>Tuesday</h2><p>" + tuesdayMeal + "</p>");
  plan.document.write("<h2>Wednesday</h2><p>" + wednesdayMeal + "</p>");
  plan.document.write("<h2>Thursday</h2><p>" + thursdayMeal + "</p>");
  plan.document.write("<h2>Friday</h2><p>" + fridayMeal + "</p>");
  plan.document.write("<h2>Saturday</h2><p>" + saturdayMeal + "</p>");
  plan.document.write("</body></html>");
}

function clearForm() {
  document.getElementById("mealPlanForm").reset();
}
