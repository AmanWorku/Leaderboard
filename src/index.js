import './style.css';
import { refresh } from './modules/listeners.js';
import submitScore from './modules/submitScore.js';
import loadScores from './modules/loadScores.js';

const username = document.querySelector('.username');
const score = document.querySelector('.score');

refresh.addEventListener('click', () => {
  loadScores();
});
