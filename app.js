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
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden')

let currentScore = 0;
let activePlayer = 0
//dice roll
btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `/images/dice-${dice}.png`;
   

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore
        
    }else {
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1:0;
        player1.classList.toggle('player-active');
        player2.classList.toggle('player-active');

    }
})