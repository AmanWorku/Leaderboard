import './style.css';
import { refresh, submit } from './modules/listeners.js';
import submitScore from './modules/submitScore.js';
import loadScores from './modules/loadScores.js';

loadScores();

refresh.addEventListener('click', () => {
  loadScores();
});

submit.addEventListener('click', () => {
  const username = document.querySelector('.username');
  const score = document.querySelector('.score');
  submitScore(username.value, score.value);
});