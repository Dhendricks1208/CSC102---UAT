// This function updates the text of the heading when called
function updateText(){
    document.getElementById("heading").innerHTML = "Let's Play Gold Fish!";
}

// This function helps the game run
function playGoldFish() {

    // Get random numbers between 1 and 10 for player and computer cards
    var playerCard = Math.floor(Math.random() * 10) + 1;

    var computerCard = Math.floor(Math.random() * 10) + 1;

    // show cards
    document.getElementById("gameResult").innerHTML = "You drew a " + playerCard + ". The computer drew a " + computerCard + ".";

    // check if player or computer wins
    if (playerCard === computerCard) {
        document.getElementById("gameResult").innerHTML += "<br>You win!";
    } else {
        document.getElementById("gameResult").innerHTML += "<br>You lose!";
    }
}