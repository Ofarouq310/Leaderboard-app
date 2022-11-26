const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'GOQxFiWpja2X8drCwwb7';
const requestURL = `${baseURL}${gameID}/scores/`;
const scoresList = document.querySelector('#leaderboard-list');

const getScoresList = async () => {
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      scoresList.innerHTML = `${json.result.sort((a, b) => b.score - a.score).map((score, index) => `<tr><td>${index + 1}</td><td>${score.user}</td><td>${score.score}</td></tr>`).join('')}`;
    });
};

export default getScoresList;