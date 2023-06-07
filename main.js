/* functions */

let getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
}

let getComputerChoice = () => {
    const playableOptions = ["rock", "paper", "scissor"];
    
    return playableOptions[
        getRandomIndex(playableOptions.length)
        ];
}

let roundResult = (playerSelection, computerSelection) => {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "draw";
        } else if (computerSelection == "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "player";
        } else if (computerSelection == "paper") {
            return "draw";
        } else {
            return "computer";
        }
    } else {
        if (computerSelection == "rock") {
            return "computer";
        } else if (computerSelection == "paper") {
            return "player";
        } else {
            return "draw";
        }
    };
}



/* functionality */

/* player play node */
const playNodes = document.querySelectorAll(".play");

/* result board node */
const resultBoardNode = document.querySelector(".result");

/* players selection image nodes*/
const playerSelectionIllustrationNode = document.querySelector(".player-choose-illustration img");
const computerSelectionIllustrationNode = document.querySelector(".npc-choose-illustration img");


/* game score nodes */
const playerScoreNode = document.querySelector(".player-score");
const computerScoreNode = document.querySelector(".npc-score");
const roundResultNode = document.querySelector(".round-result");

/* final overlay node */
const finalOverlayNode = document.querySelector(".final-overlay");
const finalOverlayMessageNode = document.querySelector(".final-message");
const playAgainBtnNode = document.querySelector(".play-again");

/* store number of rounds played */
let roundCounter = 0;


/* track the players individual scores */
let playerScore = 0;
let computerScore = 0;


for (const element of playNodes) {
    element.addEventListener("click", function() {
        /* players selection */
        playerSelection = this.classList[1];
        computerSelection = getComputerChoice();

        /* get the result of the round */
        let result = roundResult(playerSelection, computerSelection);

        /* turn the score board on after the first round */
        if (roundCounter === 0) {
            console.log(resultBoardNode.classList.toggle("active"));
        }

        /* change the players individual scores based on the results */

        if (result === "draw") {
            playerScoreNode.textContent = playerScore;
            computerScoreNode.textContent = computerScore;
            roundResultNode.textContent = "DRAW";
        }

        if (result == "player") {
            playerScore++;
            playerScoreNode.textContent = playerScore;
            computerScoreNode.textContent = computerScore;
            roundResultNode.textContent = "PLAYER";
        }

        if (result == "computer") {
            computerScore++;
            computerScoreNode.textContent = computerScore;
            playerScoreNode.textContent = playerScore;
            roundResultNode.textContent = "COMPUTER";
        }

        /* player play illustration change */
        if (roundCounter === 0) {
            if (playerSelection === "rock") {
                playerSelectionIllustrationNode.setAttribute("src", "assets/rock-hand.webp");
            } else if (playerSelection === "paper") {
                playerSelectionIllustrationNode.setAttribute("src", "assets/paper-hand.png");
            } else {
                playerSelectionIllustrationNode.setAttribute("src", "assets/scissor-hand.webp");
            }
        } else {
            if (playerSelection === "rock") {
                playerSelectionIllustrationNode.src = "assets/rock-hand.webp";
            } else if (playerSelection === "paper") {
                console.log("testing")
                playerSelectionIllustrationNode.src = "assets/paper-hand.png";
            } else {
                playerSelectionIllustrationNode.src = "assets/scissor-hand.webp";
            }
        }

        /* computer play illustration change */
        if (roundCounter === 0) {
            if (computerSelection === "rock") {
                computerSelectionIllustrationNode.setAttribute("src", "assets/rock-hand.webp");
            } else if (computerSelection === "paper") {
                computerSelectionIllustrationNode.setAttribute("src", "assets/paper-hand.png");
            } else {
                computerSelectionIllustrationNode.setAttribute("src", "assets/scissor-hand.webp");
            }
        } else {
            if (computerSelection === "rock") {
                computerSelectionIllustrationNode.src = "assets/rock-hand.webp";
            } else if (computerSelection === "paper") {
                computerSelectionIllustrationNode.src = "assets/paper-hand.png";
            } else {
                computerSelectionIllustrationNode.src = "assets/scissor-hand.webp";
            }
        }

        roundCounter++

        /* end of the game */
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                finalOverlayMessageNode.textContent = "YOU WON!"
                finalOverlayNode.classList.toggle("active");
            } else {
                finalOverlayMessageNode.textContent = "YOU LOSE!"
                finalOverlayNode.classList.toggle("active");
            }   
        }
        });
}

/* reset */
playAgainBtnNode.addEventListener("click", () => {
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    resultBoardNode.classList.toggle("active");
    finalOverlayNode.classList.toggle("active");
})