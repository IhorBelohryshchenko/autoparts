const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPassword');
const clearBlock = document.getElementById('clear_button');
const hasCorrectSymbol = document.getElementById('has_correct_symbol');
const listMinLength = document.getElementById('min_length');
const listHasUppercase = document.getElementById('has_uppercase');
const listHasLowercase = document.getElementById('has_lowercase');
const listHasNumber = document.getElementById('has_number');
const listHasSymbol = document.getElementById('has_symbol');

clearBlock.addEventListener('click', clear);
emailInput.addEventListener('input', email);
passInput.addEventListener('input', password);

function password() {
    const passValue = passInput.value;
    listMinLength.classList.add('success')
    listMinLength.classList.toggle('success', passValue.length >= 8);
    listHasNumber.classList.toggle('success', passValue.match(/\d/g));
    listHasUppercase.classList.toggle('success', passValue.match(/[A-Z]/g));
    listHasLowercase.classList.toggle('success', passValue.match(/[a-z]/g));
    listHasSymbol.classList.toggle('success', passValue.match(/.*[^a-zA-Z0-9]/g));
};

function email() {
    const emailValue = emailInput.value;
    hasCorrectSymbol.classList.add('success');
    hasCorrectSymbol.classList.toggle('success', emailValue.match(/@/g));
};

function clear() {
    const modalBlock = document.getElementById("loginSuccess");
    if (emailInput.value.length > 0 && passInput.value.length > 0) {
        modalBlock.style.display = 'flex';
    };
};
