'use strict'

//elements
const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const current0 = document.querySelector('#current-0');
const current1 = document.querySelector('#current-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

//start conditions
let playing, currentScore, activePlayer, scoreTracker;
// score0.textContent = 0;
// score1.textContent = 0;
// diceEl.classList.add('hidden')

// let playing = true
// let currentScore = 0;
// let activePlayer = 0;
// const scoreTracker = [0,0];

const switchPlayer = function(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1:0;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
}
//init game
const resetGame = function(){
    diceEl.classList.add('hidden')
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    scoreTracker = [0,0];
    playing = true
    currentScore = 0;
    activePlayer = 0;
    player1.classList.remove('player-winner')
    player2.classList.remove('player-winner')
    player1.classList.add('player-active')
    player2.classList.remove('player-active')
}
resetGame()

//dice roll
btnRoll.addEventListener('click', function() {
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;
   
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore
        
    }else {
        switchPlayer()
    }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
    scoreTracker[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scoreTracker[activePlayer]
 
    if (scoreTracker[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden')
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner')
        document.querySelector(`.player-${activePlayer}`).classList.remove('player-active')
    }else {
        switchPlayer()
    }
    }
})

//New Game
btnNew.addEventListener('click', resetGame)