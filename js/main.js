const input = document.getElementById('input-user');
const btn = document.querySelector('.lottery__button');
const paragraphError = document.querySelector('.lottery__error');
const result = document.querySelector('.lottery__result');
const btnHistory = document.querySelector('.history__button');

const hystoryGames = [];

const toggleError = (paragraph, input, msg) => {
    const isError = msg !== '';

    if (isError) {
        paragraph.classList.add('error');
        paragraph.textContent = msg;
        input.classList.add('input-error');
    } else {
        paragraph.classList.remove('error');
        paragraph.textContent = '';
        input.classList.remove('input-error');
    }
};

const isValidNumber = () => {
    const number = Number(input.value);
    const badInputFormated = input.validity.badInput;
    let msg = '';

    if (!number && !badInputFormated) {
        msg = 'Este campo es requerido';
    } else if (badInputFormated) {
        msg = 'formato incorrecto';
    } else if (number < 1 || number > 10) {
        msg = 'El numero tiene que estar entre 1 al 10';
    } else if (!Number.isInteger(number)) {
        msg = 'El numero no puede ser un decimal';
    }

    const isError = msg !== '';
    toggleError(paragraphError, input, msg);

    return !isError ? number : null;
};

const isWinner = () => {
    const numRandom = Math.floor(Math.random() * 10) + 1;

    const numUser = isValidNumber();
    if (numUser === null) return;

    result.innerHTML = '';

    const winner = numRandom === numUser;

    if (winner) {
        result.innerHTML = `<p>Ganaste</p>`;
    } else {
        result.innerHTML = `<p>Sigue intentandolo</p>`;
    }
    historyResult(numUser, numRandom, winner);
};

const historyResult = (numUser, numRandom, winner) => {
    hystoryGames.push({
        userNumber: numUser,
        randomNumber: numRandom,
        result: winner ? 'Ganaste' : 'Perdiste',
    });
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    isWinner();
});

btnHistory.addEventListener('click', () => {
    result.innerHTML = '';
    hystoryGames.forEach((game) => {
        const p = document.createElement('p');
        p.textContent = `Tu número: ${game.userNumber} | Número ganador: ${game.randomNumber} | Resultado: ${game.result}`;

        result.appendChild(p);
    });
});
