// This waits until the page elements exist before we try to use them
window.onload = function () {

  // This stores the form element so we can control the submission
  var form = document.getElementById("userForm");

  // This is the output where validation warnings will be shown
  var validationDiv = document.getElementById("validationMessage");

  // This is the output where the secret message will be shown
  var secretDiv = document.getElementById("secretMessage");

  // This clears the message areas on first load
  validationDiv.innerHTML = "";
  // This clears the secret message area on first load
  secretDiv.innerHTML = "";

  // This assigns a submit handler
  form.onsubmit = function (event) {

    // This prevents the form from refreshing the page
    event.preventDefault();

    // This reads the first name input
    var first = document.getElementById("firstName").value.trim();

    // This reads the last name input
    var last = document.getElementById("lastName").value.trim();

    // This reads the zip code input
    var zip = document.getElementById("zipcode").value.trim();

    // This combines first name and last name into one variable
    var fullName = first + " " + last;

    // This clears old messages each time the user clicks submit
    validationDiv.innerHTML = "";
    // This clears the secret message each time the user clicks submit
    secretDiv.innerHTML = "";

    // This checks if the combined full name is longer than 20 characters
    if (fullName.length > 20) {
      // This shows a warning using innerHTML
      validationDiv.innerHTML = "Name is too long. Please use 20 characters or less.";
      // This stops the program from continuing
      return;
    }

    // This regex checks for exactly 5 digits
    var zipPattern = /^\d{5}$/;

    // This checks if the zip code matches the pattern we defined
    if (!zipPattern.test(zip)) {
      // This shows a warning
      validationDiv.innerHTML = "Invalid zip code Zip must be exactly 5 digits (numbers only).";
      // This stops the program from continuing
      return;
    }

    // If inputs are valid we can show the secret message
    secretDiv.innerHTML = "Access granted, " + fullName + "! Your Secret message: You are now inside the Hendricks' Vault";


    // This removes spaces and makes everything lowercase
    var cleaned = fullName.replace(/\s+/g, "").toLowerCase();

    // This reverses the cleaned string
    var reversed = cleaned.split("").reverse().join("");

    // This checks if the cleaned and reversed name is the same as the original cleaned name
    if (cleaned === reversed) {
      // This shows a special message for palindromic names
      secretDiv.innerHTML += " Also, your name is a palindrome!";
    }
  };
};