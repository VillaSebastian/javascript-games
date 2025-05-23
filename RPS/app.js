const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
   
    computerChoiceDisplay.innerHTML = computerChoice
    getResult()
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' &&  userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' &&  userChoice === "scissors") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' &&  userChoice === "rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' &&  userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' &&  userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' &&  userChoice === "paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}
