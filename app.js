'use strict'

//elements
const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

//start conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden')

//dice roll
btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `/images/dice-${dice}.png`;
    console.log(dice)
})