const fetchData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kN0uWyCAtmzgUqRYuCdv/scores/');
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default fetchData;
