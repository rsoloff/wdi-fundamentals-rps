////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move1 = getInput();
    if (move1 === null) {
        getInput();
    } else {
        console.log("player chooses " + move1);
        playerMove = move1;
        getComputerMove();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move2 = randomPlay();
    if (move2 === null || 0) {
        randomPlay ();
    }
    else {
        console.log("computer chooses " + move2);
        computerMove = move2;
        getWinner(playerMove,computerMove);
    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("The game is a tie.");
        getInput();
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
            console.log("The winner is " + winner);
            return winner;
        } else {
            winner = "player";
            console.log("The winner is " + winner);
            return winner;
        }
    } else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = "computer";
            console.log("The winner is " + winner);
            return winner;        
        } else {
            winner = "player";
            console.log("The winner is " + winner);
            return winner;
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
            console.log("The winner is " + winner);
            return winner;
        } else {
            winner = "player";
            console.log("The winner is " + winner);
            return winner;
        }
    } else {
        getInput();
    }
}

function playToFive() {
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    console.log("Let's play Rock, Paper, Scissors");
    getPlayerMove();
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins <5) {
        var winner = getWinner();
            if (playerWins === 5 || computerWins === 5) {
             console.log("The final score is " + playerWins + " to " + computerWins);
            break;
        } 
        else 
        {
            if (winner === "player") 
            {
             playerWins += 1;
             console.log("The score is currently " + playerWins + " to " + computerWins);
            } 
            else if (winner === "computer") 
            {
             computerWins += 1;
             console.log("The score is currently " + playerWins + " to " + computerWins);
            }  
            else if (winner === "tie") {
                playerWins += 0;
                computerWins += 0;
            }
        }
    }
}