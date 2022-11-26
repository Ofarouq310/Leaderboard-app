const name = document.querySelector('#user-name');
const score = document.querySelector('#user-score');
const message = document.querySelector('#message');
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'GOQxFiWpja2X8drCwwb7';
const requestURL = `${baseURL}${gameID}/scores/`;

const addNewScore = async () => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      message.innerText = json.result;
      message.classList.add('active');
    });
};

export default addNewScore;