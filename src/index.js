import './style.css';
import './modules/listeners.js';

const newGame = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Spiderman',
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

newGame();
