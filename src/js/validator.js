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

export const isValidNumber = (input, paragraphError) => {
    const number = Number(input.value);
    const badInputFormated = input.validity.badInput;
    let msg = '';

    if (!number && !badInputFormated) {
        msg = '❌ Este campo es requerido';
    } else if (badInputFormated) {
        msg = '❌ formato incorrecto';
    } else if (!Number.isInteger(number)) {
        msg = '❌ El numero no puede ser un decimal';
    } else if (number < 1 || number > 10) {
        msg = '❌ El numero tiene que estar entre 1 al 10';
    }

    const isError = msg !== '';
    toggleError(paragraphError, input, msg);

    return !isError ? number : null;
};
