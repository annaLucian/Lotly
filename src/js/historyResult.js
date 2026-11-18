const hystoryGames = [];

export const historyResult = (numUser, numRandom, winner) => {
    hystoryGames.push({
        userNumber: numUser,
        randomNumber: numRandom,
        result: winner ? 'Ganaste' : 'Perdiste',
    });
};

export const showResultHistory = (containerResult) => {
    containerResult.style.display = 'block';
    containerResult.innerHTML = '';

    if (hystoryGames.length === 0) {
        containerResult.innerHTML = `
                <p class="text-result"><img src="/assets/icon-no-result.png" alt="" class="result__img" />No tienes jugadas que mostrar aún.</p>
  
        `;
        return;
    }

    const divTitle = document.createElement('div');
    divTitle.className = 'lottery__history-title__contain';

    const btnRes = document.createElement('button');
    btnRes.className = 'btn__result';
    btnRes.textContent = 'Limpiar';
    divTitle.appendChild(btnRes);

    const titleHistory = document.createElement('h3');
    titleHistory.className = 'lottery__history-title';
    titleHistory.textContent = 'Historial de Jugadas';

    divTitle.appendChild(titleHistory);
    containerResult.appendChild(divTitle);

    const listWrapper = document.createElement('div');
    listWrapper.className = 'lottery__history-list';

    hystoryGames
        .slice()
        .reverse()
        .forEach((game, index) => {
            const isWinner = game.result === 'Ganaste';

            const card = document.createElement('div');
            card.className = `lottery__history-card ${isWinner ? 'lottery__history-card--win' : 'lottery__history-card--lose'}`;

            card.innerHTML = `
            <div class="lottery__history-info">
                <span class="lottery__history-attempt">#${hystoryGames.length - index}</span>
                <div class="lottery__history-numbers">
                    <span>Tu: <strong>${game.userNumber}</strong></span>
                    <span class="lottery__history-vs">vs</span>
                    <span>Ganador: <strong>${game.randomNumber}</strong></span>
                </div>
            </div>
            <span class="lottery__history-badge">${game.result}</span>
        `;

            listWrapper.appendChild(card);
        });

    containerResult.appendChild(listWrapper);

    btnRes.addEventListener('click', () => {
        hystoryGames.length = 0;
        containerResult.innerHTML = '';
        containerResult.style.display = 'none';
    });
};
