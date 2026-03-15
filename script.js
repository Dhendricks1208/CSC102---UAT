// Donneshia Hendricks -- Intro to Programming -- CSC102

// This is a class to track how many times the user has checked if the word is a plaindrome or not.
class WordStats {
    // This constructor sets the starting values
    constructor() {
        this.totalWords = 0;
        this.palindromes = 0;
        this.notPalindromes = 0;
    }
    // this is the method to update the stats after each check
    updateStats(isPalindrome) {
        this.totalWords++;

        if (isPalindrome) {
            this.palindromes++;
        } else {
            this.notPalindromes++;
        }
    }
}

// Create an object from my added class
let stats = new WordStats();


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

    // this is to check if the input is a palindrome or not
    let isPalindrome = (reversedVal === inputVal);
    // This is to update the stats after each check
    stats.updateStats(isPalindrome);

    // This displays the result to the user, and also shows the stats after each check.
    if (isPalindrome) {
        // This is to show a message to the user if the chosen word is a palindrome.
        paragraph.innerHTML = `<p><span>${inputVal}</span> is a Palindrome</p>`;
    } else {
        // This is to show a message to the user if the chosen word is not a palindrome.
        paragraph.innerHTML = `<p><span>${inputVal}</span> is not a Palindrome</p>`;
    }
    // This is used to display stats after each check
    displayStats();
}

function displayStats() {
    let statsBox = document.getElementById("stats");

    statsBox.innerHTML = `
        <p>Total words checked: ${stats.totalWords}</p>
        <p>Palindromes: ${stats.palindromes}</p>
        <p>Not Palindromes: ${stats.notPalindromes}</p>
    `;
}
