// import './style.css';
import addNewScore from './modules/add-score.js';
import getScoresList from './modules/get-scores.js';
import refresh from './modules/refresh.js';

// Declare needed variables
const name = document.querySelector('#user-name');
const score = document.querySelector('#user-score');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (name.value && score.value) {
    addNewScore();
    name.value = '';
    score.value = '';
  }
});

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    message.innerText = '';
    message.classList.remove('active');
  });
});

getScoresList();

refresh();
