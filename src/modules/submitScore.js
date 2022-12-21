import loadScores from './loadScores.js';

const submitScore = (username, score) => {
  if (username || score !== '') {
    const submitData = async () => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kN0uWyCAtmzgUqRYuCdv/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            user: `${username}`,
            score,
          }),
        },
      );
      return response.status;
    };
    submitData()
      .then((res) => res)
      .then(() => {
        loadScores();
      });
  }
};

export default submitScore;