import { modalOpen } from './modal.js';
import { historyResult, showResultHistory } from './historyResult.js';
import { isValidNumber } from './validator.js';
import { btnHistory, input, btn, paragraphError, containerResult } from './dom.js';

const isWinner = () => {
    const numRandom = Math.floor(Math.random() * 10) + 1;

    const numUser = isValidNumber(input, paragraphError);
    if (numUser === null) return;

    const winner = numRandom === numUser;

    if (winner) {
        modalOpen(numUser, numRandom, true, input);
    } else {
        modalOpen(numUser, numRandom, false, input);
    }

    historyResult(numUser, numRandom, winner);
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    containerResult.style.display = 'none';
    isWinner();
});

btnHistory.addEventListener('click', () => {
    showResultHistory(containerResult);
});
