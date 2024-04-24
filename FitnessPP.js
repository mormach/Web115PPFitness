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
  // Validate email address
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return; // Stop execution if email is invalid
  }

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

  //Add Download b utton
  plan.document.write('<button id="downloadBtn">Download</button>');
  plan.document
    .getElementById("downloadBtn")
    .addEventListener("click", function () {
      var content = plan.document.documentElement.outerHTML;
      var blob = new Blob([content], { type: "text/html" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "meal_plan.html";
      a.click();
      URL.revokeObjectURL(url);
    });

  // Add print button
  plan.document.write('<button id="printBtn">Print</button>');
  plan.document
    .getElementById("printBtn")
    .addEventListener("click", function () {
      plan.print();
    });
}

function clearForm() {
  document.getElementById("mealPlanForm").reset();
}
function validateEmail(email) {
  // Regular expression for email validation
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
