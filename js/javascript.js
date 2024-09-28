'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomizeNumbers = () => {
  rand_num1 = getRandomIntNumberRange(1, 10);
  rand_num2 = getRandomIntNumberRange(1, 10);
  document.querySelector("#num1").innerHTML = rand_num1;
  document.querySelector("#num2").innerHTML = rand_num2;
}

addEventListener("DOMContentLoaded", () => {
  randomizeNumbers();
});

document.querySelector('button').addEventListener('click', () => {
  const answer = Number(document.querySelector('input').value);
  const correctAnswer = rand_num1 + rand_num2;
  
  if (answer === correctAnswer) {
    alert('Correct!');
    correctAnswers++;
    document.querySelector('#correct-count').innerHTML = correctAnswers;
  } else {
    alert('Incorrect!');
    wrongAnswers++;
    document.querySelector('#wrong-count').innerHTML = wrongAnswers;
  }
  
  
  randomizeNumbers();
  document.querySelector('input').value = '';
});
