// Donneshia Hendricks -- Intro to Programming -- CSC102

// This function is to check if the chosen word is a palindrome or not.
function checkWord() {
    // This is to get the user input and the paragraph element where the result will be displayed.
    let input = document.getElementById("input");
    // This is to get the paragraph element.
    let paragraph = document.getElementById("paragraph");

    // If the user input is empty, then show a message to the user.
    if (!input.value) {
        // This is to show a message to the user if the input is empty.
        paragraph.innerHTML = "<p>Input is empty</p>";
        return;
        // This is to check if the input is a single character, then show a message to the user if it is.
    } else if (input.value.length === 1) {
        paragraph.innerHTML = "<p>Input is a single character</p>";
        return;
    }

    // this is to convert to lowercase
    const inputVal = input.value.toLowerCase();
    //this is to reverse the string
    const reversedVal = input.value.split('').reverse().join('').toLowerCase(); 

    //this is to check if palindrome or not
    if (reversedVal === inputVal) {
        // This is to show a message to the user if the chosen word is a palindrome.
        paragraph.innerHTML = `<p><span>${inputVal}</span> is a Palindrome</p>`;
    } else {
        // This is to show a message to the user if the chosen word is not a palindrome.
        paragraph.innerHTML = `<p><span>${inputVal}</span> is not a Palindrome</p>`;
    }
}