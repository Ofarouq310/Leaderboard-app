import getScoresList from './get-scores.js';

const refreshBtn = document.querySelector('#refresh-btn');

const refresh = () => {
  refreshBtn.addEventListener('click', () => {
    getScoresList();
  });
};

export default refresh;