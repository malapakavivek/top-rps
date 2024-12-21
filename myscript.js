const dictionary = {};
dictionary[0] = "rock"
dictionary[1] = "paper"
dictionary[2] = "scissors" 

let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");


function getValue(e){
    humanChoice = e.target.textContent.toLowerCase()
    console.log(humanChoice)
    computerChoice = dictionary[Math.floor(Math.random()*3)]
    console.log(computerChoice)
    playRound(humanChoice,computerChoice)
    getScores()
}

paper.addEventListener("click",getValue)
rock.addEventListener("click",getValue)
scissors.addEventListener("click",getValue)



const div = document.querySelector("div")
const para = document.createElement("p")

function playRound(human,computer){
    //Rock
    if (human == "rock" & computer == "paper"){
        para.textContent =`You lose ${computer} beats ${human}`;
        div.appendChild(para)
        computerScore+=1;
    }
    if (human == "rock" & computer == "scissors"){
        para.textContent =`You win ${human} beats ${computer}`;
        div.appendChild(para)
        humanScore+=1;
    }
    if (human == "rock" & computer == "rock"){
        para.textContent =`Both chose Rock, It's a draw`;
        div.appendChild(para)
    }
    //Paper
    if (human == "paper" & computer == "rock"){
        para.textContent =`You win ${human} beats ${computer}`;
        div.appendChild(para)
        humanScore+=1;
    }
    if (human == "paper" & computer == "paper"){
        para.textContent =`Both chose Paper, It's a draw`;
        div.appendChild(para)   
    }
    if (human == "paper" & computer == "scissors"){
        para.textContent =`You lose ${computer} beats ${human}`;
        div.appendChild(para)
        computerScore+=1;
    }
    //Scissors
    if (human == "scissors" & computer == "rock"){
        para.textContent =`You lose ${computer} beats ${human}`;
        div.appendChild(para)
        computerScore+=1;
    }
    if (human == "scissors" & computer == "paper"){
        para.textContent =`You win ${human} beats ${computer}`;
        div.appendChild(para)
        humanScore+=1;
    }
    if (human == "scissors" & computer == "scissors"){
        para.textContent =`Both chose scissors, It's a draw`;
        div.appendChild(para)       }

    numberOfRounds+=1            
}

function getScores() {
    const span = document.createElement("span");
    if (numberOfRounds == 5) {
        if (humanScore > computerScore) {
            span.textContent = `You Win \nFinal Scores = You:${humanScore} ComputerScore:${computerScore}`;
            span.style.whiteSpace = "pre"; // Preserve line breaks
            div.appendChild(span)
            endGame();
        }
        if (humanScore < computerScore) {
            span.textContent = `Computer Wins \nFinal Scores = You:${humanScore} ComputerScore:${computerScore}`;
            span.style.whiteSpace = "pre"; // Preserve line breaks
            div.appendChild(span)
            endGame();
        }
    }
}


function endGame(){
    buttons.forEach((button) => button.setAttribute("disabled", "true"));
}

