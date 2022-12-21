import './style.css';
import './modules/submitScore.js';
import { refresh } from './modules/listeners.js';
import fetchData from './modules/loadScores.js';

const scoreContainer = document.querySelector('.score-container');
fetchData();

refresh.addEventListener('click', async () => {
  const scores = await fetchData();
  scoreContainer.innerHTML = '';
  scores.sort((a, b) => a.score - b.score).forEach((element) => {
    const scoreData = document.createElement('tr');
    scoreData.innerHTML = `
    <td>${element.user}</td>
    <td>${element.score}</td>
    `;
    scoreContainer.appendChild(scoreData);
  });
});
