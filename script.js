document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop actual form submission

  // Collect form data
  const formData = new FormData(this); // 'this' refers to the form
  const dataObj = {};
  formData.forEach((value, key) => {
    dataObj[key] = value;
  });
  //show alert Thanking user
  alert("Thank You for filling out the form!");

  // Format and display the data within the page
  const outputDiv = document.getElementById("form-output");
  const outputContent = document.getElementById("output-content");

  outputContent.textContent = JSON.stringify(dataObj, null, 2); // pretty print as JSON
  outputDiv.style.display = "block";

  // Optionally clear the form
  this.reset();
});