// selecting specific elements with id

let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");

let stats = document.querySelector("#stats");

function play() {
    document.getElementById("loader").style.display = 'block';

    // setTimeout calls the event after the specified time is over 
    setTimeout(function() {
        // hides the loader animation after 1000 milli seconds
        document.getElementById("loader").style.display = 'none';

        game();
    }, 1000);
};

function game() {
    
// getting random numbers from 1 to 6

let random1;
let random2;

random1 = Math.floor( 1 + (Math.random() * 10) % 6);
random2 = Math.floor( 1 + (Math.random() * 10) % 6);

// display the winner on screen

if (random1 > random2) {
    stats.innerHTML = "Player 1 Wins! ";
} else if (random1 < random2) {
    stats.innerHTML = "Player 2 Wins! ";
} else {
    stats.innerHTML = "Draw! ";
}

// changing dice images for player 1

if (random1 == 1) {
    dice1.setAttribute("src", "dice1.png");
}

if (random1 == 2) {
    dice1.setAttribute("src", "dice2.png");
}

if (random1 == 3) {
    dice1.setAttribute("src", "dice3.png");
}

if (random1 == 4) {
    dice1.setAttribute("src", "dice4.png");
}

if (random1 == 5) {
    dice1.setAttribute("src", "dice5.png");
}

if (random1 == 6) {
    dice1.setAttribute("src", "dice6.png");
}

// changing dice images for palyer 2

if (random2 == 1) {
    dice2.setAttribute("src", "dice1.png");
}

if (random2 == 2) {
    dice2.setAttribute("src", "dice2.png");
}

if (random2 == 3) {
    dice2.setAttribute("src", "dice3.png");
}

if (random2 == 4) {
    dice2.setAttribute("src", "dice4.png");
}

if (random2 == 5) {
    dice2.setAttribute("src", "dice5.png");
}

if (random2 == 6) {
    dice2.setAttribute("src", "dice6.png");
}

}