function newScore(username, score) {
  const scoreContainer = document.querySelector('.score-container');
  const scoreData = document.createElement('tr');
  scoreData.innerHTML = `
    <td>${username}</td>
    <td>${score}</td>
    `;
  scoreContainer.appendChild(scoreData);
}
export default newScore;
