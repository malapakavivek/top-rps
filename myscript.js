const dictionary = {};
dictionary[0] = "rock"
dictionary[1] = "paper"
dictionary[2] = "scissors" 

let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    computerChoice = dictionary[Math.floor(Math.random()*3)]
    return computerChoice
}

function getHumanChoice(){
    choice = prompt("Enter your choice");
    humanChoice = choice.toLowerCase();
    
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        alert("Enter a valid choice");
    }
    
    return humanChoice;
}

function playRound(human,computer){
    //Rock
    if (human == "rock" & computer == "paper"){
        console.log(`You lose ${computer} beats ${human}`);
        computerScore+=1;
    }
    if (human == "rock" & computer == "scissors"){
        console.log(`You win ${human} beats ${computer}`);
        humanScore+=1;
    }
    if (human == "rock" & computer == "rock"){
        console.log(`Both chose Rock, It's a draw`);
    }
    //Paper
    if (human == "paper" & computer == "rock"){
        console.log(`You win ${human} beats ${computer}`);
        humanScore+=1;
    }
    if (human == "paper" & computer == "paper"){
        console.log(`Both chose Paper : It's a draw`);
    }
    if (human == "paper" & computer == "scissors"){
        console.log(`You lose ${computer} beats ${human}`);
        computerScore+=1;
    }
    //Scissors
    if (human == "scissors" & computer == "rock"){
        console.log(`You lose ${computer} beats ${human}`)
        computerScore+=1;
    }
    if (human == "scissors" & computer == "paper"){
        console.log(`You win ${human} beats ${computer}`)
        humanScore+=1;
    }
    if (human == "scissors" & computer == "scissors"){
        console.log(`Both chose scissors : it's a draw`)
    }
}

function playGame(){
    for (i=1;i<=5;i++){
        let computerSelection = getComputerChoice()
        let humanSelection = getHumanChoice()
        playRound(humanSelection,computerSelection);
        console.log("Your score: ",humanScore + " Computer Score: ",computerScore)
    }
    if (humanScore>computerScore){
        console.log("You Win")
    }
    else if (computerScore>humanScore){
        console.log("Computer Wins")
    }
    else{
        console.log("It's a draw")
    }
}

playGame();