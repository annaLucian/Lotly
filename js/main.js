const input = document.getElementById('input-user');
const btn = document.querySelector('.lottery__button');
const paragraphError = document.querySelector('.lottery__error');

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
    const number = input.value;
    const badInputFormated = input.validity.badInput;
    let msg = '';

    if (badInputFormated) {
        msg = 'Formato incorrecto';
    } else if (number === '') {
        msg = 'Este campo es requerido';
    } else if (number < 1 || number > 10) {
        msg = 'El numero tiene que estar entre 1 al 10';
    }

    const isError = msg !== '';
    toggleError(paragraphError, input, msg);

    return !isError ? number : null;
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log('numberaleatorio:', numeroAleatorio);
    const number = isValidNumber();
    if (number === null) return;
    console.log('numer', number);
});
