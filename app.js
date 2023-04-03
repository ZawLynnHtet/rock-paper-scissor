const scores = {
    win: 0,
    lose: 0,
    draw: 0
};

var winSound = new Audio("audio/mixkit-achievement-bell-600.wav");
var loseSound = new Audio("audio/mixkit-8-bit-lose-2031.wav");
var drawSound = new Audio("audio/mixkit-arcade-retro-jump-223.wav");


const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", function() {
    scores.win = 0;
    scores.lose = 0;
    scores.draw = 0;
    document.querySelector(".win").innerHTML = scores.win;
    document.querySelector(".lose").innerHTML = scores.win;
    document.querySelector(".draw").innerHTML = scores.win;

})

const resultImg = document.querySelector(".result-image");

function playGame(yourImage) {
    const computerMove = comuterTurn();
    let result = '';
    if (yourImage === 'rock') {
        if (computerMove === 'rock') {
            result = 'Draw!';
        }
        else if (computerMove === 'paper') {
            result = 'You win!';
        }
        else if (computerMove === 'scissor') {
            result = 'You lose!';
        }
    }

    if (yourImage === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        }
        else if (computerMove === 'paper') {
            result = 'Draw!';
        }
        else if (computerMove === 'scissor') {
            result = 'You lose!';
        }
    }

    if (yourImage === 'scissor') {
        if (computerMove === 'rock') {
            result = 'You lose!';
        }
        else if (computerMove === 'paper') {
            result = 'You win!';
        }
        else if (computerMove === 'scissor') {
            result = 'Draw!';
        }
    }

    if (result === 'You win!') {
        scores.win += 1;
        document.querySelector(".win").innerHTML = scores.win;
        winSound.play();
    }
    else if (result === 'You lose!') {
        scores.lose += 1;
        document.querySelector(".lose").innerHTML = scores.lose;
        loseSound.play();
    }
    else if (result === 'Draw!') {
        scores.draw += 1;
        document.querySelector(".draw").innerHTML = scores.draw;
        drawSound.play();
    }

    resultImg.innerHTML = `You <img src="images/${yourImage}.png" class="show-img"> <img src="images/${computerMove}.png" class="show-img"> Computer`;

    // alert(`You pick ${yourImage}. Computer pick ${computerMove}.${result}`);
}

function comuterTurn() {
    const random = Math.random();
    let computerMove = '';

    if (random >= 0 && random < 1/3) {
        computerMove = 'rock';
    }
    else if (random >= 1/3 && random < 2/3) {
        computerMove = 'paper';
    }
    else if (random >= 2/3 && random < 1) {
        computerMove = 'rock';
    }
    return computerMove;
}