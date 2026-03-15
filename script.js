// Donneshia Hendricks Intro to Programming
// Event Driven Programming


// Global variables for movement
let moveInterval;
let xPos = 100;   // starting X position
let yPos = 100;   // starting Y position
let xSpeed = 4;   // horizontal speed
let ySpeed = 4;   // vertical speed

// The function that is called when the start button is clicked
function startMovement() {

    // This is the disable Start button
    document.getElementById("startBtn").disabled = true;

    // Here is my enable Stop button
    document.getElementById("stopBtn").disabled = false;

    // This is where my display message using innerHTML will show up
    document.getElementById("message").innerHTML = "Heart meme is bouncing around!";

    // This is to start the movement of my meme
    bounceMeme();
    playMoveSound();
}

// This is the function that is called when my stop button is clicked
function stopMovement() {

    // This is the disable Stop button
    document.getElementById("stopBtn").disabled = true;

    // This is the enable Start button
    document.getElementById("startBtn").disabled = false;

    // This is the stop the interval movement function
    clearInterval(moveInterval);

    // This is my display message using innerHTML that will show up when the stop button is clicked
    document.getElementById("message").innerHTML = "Heart meme stopped.";
}

// I added this function so the meme movesd smoothly on the screen and bounces off the edges
function bounceMeme() {

    // This runs the movement 60 times per second
        
    moveInterval = setInterval(function () {

        // This gets my meme element
        let meme = document.getElementById("meme");

        // This will get window width and height
        let maxWidth = window.innerWidth - meme.offsetWidth;
        let maxHeight = window.innerHeight - meme.offsetHeight;


        // Update position
        xPos += xSpeed;
        yPos += ySpeed;

        // This is what I used for the meme to bounce off the left and right edges
        if (xPos <= 0 || xPos >= maxWidth) {
            xSpeed = -xSpeed; // reverse direction
        }

        // This is what I used for my meme to bounce off the top or bottom edges
        if (yPos <= 0 || yPos >= maxHeight) {
            ySpeed = -ySpeed; // reverse direction
        }

        // This is how my meme goes into new positions
        meme.style.left = xPos + "px";
        meme.style.top = yPos + "px";

    }, 16);
}

// This is the required function for form validation
function validateInput() {

    // This is where you get the user input value
    let text = document.getElementById("userInput").value;

    // This is the display validation message
    document.getElementById("message").innerHTML = 
        "You entered: " + text;
}

// This function plays the sound when the image moves
function playMoveSound() {
    let sound = document.getElementById("moveSound");
    sound.play();
}