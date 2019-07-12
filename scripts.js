const moves = ["rock", "paper", "scissors"]
const buttons = document.querySelectorAll('#playerSelection button')

let playerScore = 0
let npcScore = 0
let tieScore = 0
let round = 0
let playerMove = ""

function npcMove () {
    let npcMove = moves[Math.floor(Math.random()*moves.length)]
    return npcMove
}

function playRound () {

    round +=1
    document.querySelector('#round').textContent = `Round: ${round}`

    let playerSelection = playerMove
    let npcSelection = npcMove()
    document.querySelector('#npcSelection').textContent = `NPC played ${npcSelection}`    

    if ((playerSelection === 'rock' && npcSelection === 'scissors') ||
      (playerSelection === 'scissors' && npcSelection === 'paper') ||
      (playerSelection === 'paper' && npcSelection === 'rock')) {

        playerScore += 1
        document.querySelector('#playerScore').textContent = `Player: ${playerScore}`
        document.querySelector('#roundResults').textContent = `You won this round! ${playerSelection} beats ${npcSelection}`
    } 
    else if (playerSelection === npcSelection) {
        tieScore +=1
        document.querySelector('#tieScore').textContent = `Tie: ${tieScore}`
        document.querySelector('#roundResults').textContent = 'This round is a tie!'
    } 
    else {
        npcScore += 1
        document.querySelector('#npcScore').textContent = `NPC: ${npcScore}`
        document.querySelector('#roundResults').textContent = `The NPC won this round! ${npcSelection} beats ${playerSelection}`
    }
    
}

function game () {
    
    if (round < 5) {
        playRound()
    }

    if (round == 5) {
        if (playerScore > npcScore)
        {
            document.querySelector('#winner').textContent = 'You won the game!'
        }
        else if (playerScore == npcScore) {
            document.querySelector('#winner').textContent = 'The game is a tie!'
        }
        else {
            document.querySelector('#winner').textContent = 'The NPC won the game!'
        }

    }

}

function reset () {
    document.querySelector('#npcSelection').textContent = ''
    document.querySelector('#roundResults').textContent = ''
    playerScore = 0
    document.querySelector('#playerScore').textContent = `Player: ${playerScore}`
    npcScore = 0
    document.querySelector('#npcScore').textContent = `NPC: ${npcScore}`
    tieScore = 0
    document.querySelector('#tieScore').textContent = `Tie: ${tieScore}`
    round = 0
    document.querySelector('#round').textContent = `Round: ${round}`
    document.querySelector('#winner').textContent = ''
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerMove = button.id

        if (round == 5) {
            reset()
        }

        game()
    })
})



