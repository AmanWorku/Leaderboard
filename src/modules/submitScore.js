import { submit } from './listeners.js';

const username = document.querySelector('.username');
const score = document.querySelector('.score');

const submitData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kN0uWyCAtmzgUqRYuCdv/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: username.value,
        score: score.value,
      }),
    },
  );
  const data = await response.json();
  return data;
};

submit.addEventListener('click', () => {
  submitData();
  username.value = '';
  score.value = '';
});