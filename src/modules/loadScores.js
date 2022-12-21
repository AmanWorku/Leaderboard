import newScore from './addScore.js';

const loadScores = () => {
  const scoreContainer = document.querySelector('.score-container');
  scoreContainer.innerHTML = '';
  const getScores = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kN0uWyCAtmzgUqRYuCdv/scores/',
    );
    const data = await response.json();
    return data.result;
  };
  getScores().then(
    (value) => {
      value.forEach((score) => {
        newScore(score.user, score.score);
      });
    },
    (error) => {
      throw new Error(error);
    },
  );
};

export default loadScores;