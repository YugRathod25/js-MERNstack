let randomNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userGuess = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userGuess.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess === 10){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess > randomNum){
        displayMsg(`Your guess was higher then the random number.`)
    }
    else if (guess === randomNum){
        displayMsg(`Congratulations! Your guess was correct.`)
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if (guess < randomNum){
        displayMsg(`Your guess was lower then the random number.`)
    }
}

function displayGuess(guess){
    userGuess.value = ''
    guessSlot.innerHTML += `${guess}, `
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`
}

function displayMsg(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userGuess.value = ''
    userGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNum = Math.floor(Math.random() * 100 + 1);
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess}`
        userGuess.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}

