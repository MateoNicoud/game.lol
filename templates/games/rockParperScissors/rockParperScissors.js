let gameFrame= document.getElementById("gameFrame");
let textArea = document.createElement("div");
let inputArea = document.createElement("div");
let line1 = document.createElement("div");
let line2 = document.createElement("div");
gameFrame.appendChild(textArea);
gameFrame.appendChild(inputArea);
inputArea.appendChild(line1);
inputArea.appendChild(line2);
textArea.style.marginTop ="200px"
textArea.style.marginBottom ="100px"
line1.style.marginBottom ="50px"
textArea.style.display = "flex";
textArea.style.justifyContent = "center";
line1.style.display ="flex";
line2.style.display ="flex";
line1.style.justifyContent ="space-evenly";
line2.style.justifyContent ="center";
let text = document.createElement("h3");
let span = document.createElement("span");
let span2 = document.createElement("span");
let rock = document.createElement("button");
let scissors = document.createElement("button");
let paper = document.createElement("button");
text.textContent ="Make a choice";
rock.textContent="rock";
scissors.textContent="scissors";
paper.textContent="paper";
textArea.appendChild(text);
line1.appendChild(rock);
line1.appendChild(scissors);
line2.appendChild(paper);
rock.onclick = function () {
    playGame(rock.textContent, getComputerChoice());
}
paper.onclick = function () {
    playGame(paper.textContent, getComputerChoice());
}
scissors.onclick = function () {
    playGame(scissors.textContent, getComputerChoice());
}
//-------------------------------------------
function getComputerChoice() {
    let computerRand = Math.floor(Math.random() * 3);
    const computerPossibleChoice = ["rock", "paper", "scissors"]
    let computerChoice = computerPossibleChoice[computerRand];
    return computerChoice;
}

//----------------------------------------------
function findWinner(playerInput, computerChoice) {
    if (playerInput === computerChoice) {
        return "Tied...";
    } else if ((playerInput === "rock" && computerChoice === "scissors") ||
        (playerInput === "scissors" && computerChoice === "paper") ||
        (playerInput === "paper" && computerChoice === "rock"))
    {
        return "YOU WIN !";
    } else {
        return "YOU LOOSE";
    }
}

//---------------------------------------------------
function playGame(uChoice, computerChoice) {
    span.textContent="Your choice is " + uChoice;
    span2.textContent ="Computer choice is " + computerChoice;
    text.textContent = findWinner(uChoice, computerChoice);
    text.style.marginTop="150px"
    textArea.style.marginTop="0"
    text.style.marginBottom="120px"
    gameFrame.removeChild(inputArea);
    textArea.style.flexDirection = "column";
    textArea.style.alignItems = "center";
    textArea.appendChild(span);
    textArea.appendChild(span2);
}


