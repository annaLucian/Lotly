import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/+esm';
const lotteryModal = document.getElementById('lottery__dialog');
const btnRetry = document.getElementById('btn-retry');
const titleModal = document.querySelector('.lottery-modal__title');
const paragraphModal = document.querySelector('.lottery-modal__text');

export const modalOpen = (numUser, numRandom, isWinner, input) => {
    if (isWinner) {
        titleModal.innerHTML = `🎉 ¡Felicidades, ganaste!`;
        paragraphModal.innerHTML = `Elegiste el <span class="number-user">${numUser}</span><br> y el número ganador fue el <strong class="number-random">${numRandom}</strong>.`;
        btnRetry.textContent = 'Jugar de nuevo';

        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            zIndex: 10005,
        });
    } else {
        titleModal.innerHTML = `¡Ups! Sigue intentando`;
        paragraphModal.innerHTML = `Elegiste el <span class="number-user">${numUser}</span>, <br>pero el número ganador fue el <strong class="number-random">${numRandom}</strong>.`;
        btnRetry.textContent = 'Volver a intentarlo';
    }

    btnRetry.classList.toggle('lottery-btn--retry', !isWinner);
    lotteryModal.showModal();
    input.value = '';
};

btnRetry.addEventListener('click', () => {
    lotteryModal.close();
});
