const moves = ["rock", "paper", "scissors"]

let playerScore = 0
let npcScore = 0
let round = 0

function npcPlay () {
    let npcMove = moves[Math.floor(Math.random()*moves.length)]
    return npcMove
}

function playRound () {

    round +=1

    let playerSelection = prompt("Best out of 5... rock, paper, scissors, shoot!:").toLowerCase()
    let npcSelection = npcPlay()

    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {

        playerSelection = prompt("Input invalid, please type rock, paper, or scissors.").toLowerCase()
    }

    if ((playerSelection === 'rock' && npcSelection === 'scissors') ||
      (playerSelection === 'scissors' && npcSelection === 'paper') ||
      (playerSelection === 'paper' && npcSelection === 'rock')) {
    playerScore += 1
    return `You won this round! ${playerSelection} beats ${npcSelection}`
    } 
    else if (playerSelection === npcSelection) {
        return 'This round is a tie!'
    } 
    else {
        npcScore += 1
        return `The NPC won this round! ${npcSelection} beats ${playerSelection}`
    }
    
}

function game () {
    while ( round < 5)
    {
        console.log(playRound())
    }

    if (playerScore > npcScore)
    {
        return 'You won the game!'
    }
    else if (playerScore == npcScore) {
        return 'The game is a tie!'
    }
    else {
        return 'The NPC won the game!'
    }

}


console.log(game())


