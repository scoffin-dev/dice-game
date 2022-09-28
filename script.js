// Grab the banner
let banner = document.querySelector('h1');

// Grab player 1's dice
let player1Die = document.querySelector('#player-1 img');

// Grab play 2's dice
let player2Die = document.querySelector('#player-2 img');

// Throw button
let throwBtn = document.querySelector('#throw-btn');

// When the button is clicked...
throwBtn.addEventListener('click', () => {
    
    // Change Player 1's dice to a random image
    let p1Score = Math.floor((Math.random() * 6) + 1);
    player1Die.setAttribute('src', `images/dice${p1Score}.png`)

    // Change Player 2's dice to a random image
    let p2Score = Math.floor((Math.random() * 6) + 1);
    player2Die.setAttribute('src', `images/dice${p2Score}.png`);
    
    // Check to see which one is higher
    if(p1Score > p2Score) {
        // P1 wins
        banner.textContent = `Player 1 wins!`;
    } else if(p2Score > p1Score) {
        // P2 wins
        banner.textContent = `Player 2 wins!`;
    } else {
        // Tie
        banner.textContent = `Tie! Throw again!`;
    }
});