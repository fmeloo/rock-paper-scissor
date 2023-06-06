let getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
}

let getPlayerChoice = () => {
    let choice = prompt("Choose yout play") ;
    return choice.toLowerCase();
}

let getComputerChoice = () => {
    const playableOptions = ["rock", "paper", "scissor"];
    
    return playableOptions[
        getRandomIndex(playableOptions.length)
        ];
}


let playRound = (playerSelection, computerSelection) => {
    playerSelection = getPlayerChoice();
    computerSelection = computerSelection();
    
    console.log(`Player chose: ${playerSelection}\nComputer chose: ${computerSelection}`);
    
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


let game = () => {
    let counter = 1;
    
    let playerScore = 0;
    let computerScore = 0;
   
    while (counter <= 5) {
        let result = playRound(getPlayerChoice, getComputerChoice);
        
        if (result == "player") {
            playerScore++;
        } else if (result == "computer") {
            computerScore++;
        } else {
            computerScore++;
            playerScore++;
        }
        
        counter++;
    }
    
    console.log(playerScore, computerScore);
}
