function generateMealPlan() {
  /*
Placeholder
*/

  myText = "<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n";
  myText +=
    /*Change later*/ "PLACEHOLDER" + ", here is your meal plan for the week.";
  myText += "</body>\n</html>";

  plan = window.open(
    "about:blank",
    "myPop",
    "width=device-width, height=device-height,left=540,top=200"
  );
  plan.document.write(myText);
}

function clearForm() {
  /*
Placeholder
*/
}

function validateEmail(email) {
  /*
Placeholder
*/
}
