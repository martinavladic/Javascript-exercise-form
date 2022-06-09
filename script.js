
const imeError = document.getElementById('imeError');
const prezimeError = document.getElementById('prezimeError');
const godinaError = document.getElementById('godinaError');
const faksError = document.getElementById('faksError');
const gradError = document.getElementById('gradError');
const emailError = document.getElementById('emailError');
const novostiCheckbox = document.getElementById('novostiCheckbox');
const aktivnostDiv = document.getElementById('aktivnostDiv');
const aktivnostError = document.getElementById('aktivnostError');
const godinaInvalidError = document.getElementById('godinaInvalidError');
const emailValidError = document.getElementById('emailValidError');
const saveBtn = document.getElementById('saveBtn');


function hideAllErrors() {
    imeError.classList.add('hide');
    prezimeError.classList.add('hide');
    godinaError.classList.add('hide');
    godinaInvalidError.classList.add('hide');
    faksError.classList.add('hide');
    emailError.classList.add('hide');
    gradError.classList.add('hide');
    aktivnostError.classList.add('hide');
    emailValidError.classList.add('hide');
}

function checkIsFormValid() {

    const ime = document.getElementById('ime').value;
    const prezime = document.getElementById('prezime').value;
    const godina = document.getElementById('godina').value;
    const faks = document.getElementById('faks').value;
    const gradSelect = document.getElementById('gradSelect').value;
    const email = document.getElementById('email').value;
    const aktivnostSelect = document.getElementById('aktivnostSelect').value;

    let valid = true;
    hideAllErrors();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(valid);
    if (!ime.length) {
        valid = false;
        imeError.classList.remove('hide');
    }
    console.log(valid);
    console.log(ime);

    if (!prezime.length) {
        valid = false;
        prezimeError.classList.remove('hide');
    }
    console.log(valid);
    if (!faks.length) {
        valid = false;
        faksError.classList.remove('hide');
    }
    console.log(valid);
    if (!godina.length) {
        valid = false;
        godinaError.classList.remove('hide');
    } else if (isNaN(godina)) {
        valid = false;
        godinaInvalidError.classList.remove('hide');
    }
    console.log(valid);
    if (!gradSelect.length || gradSelect==='0') {
        valid = false;
        gradError.classList.remove('hide');
    }
    console.log(valid);
    if (!email.length) {
        valid = false;
        emailError.classList.remove('hide');
    } else if (!email.match(validRegex)) {
        valid = false;
        emailValidError.classList.remove('hide');
    }
    console.log(valid);
    
    if (novostiCheckbox.checked && (!aktivnostSelect.length || aktivnostSelect==='0')) {
        valid = false;
        aktivnostError.classList.remove('hide');
    }
    console.log(valid);
    return valid;
};

saveBtn.onclick = function () {
    if (checkIsFormValid()) {
        alert('Podaci uspješno spremljeni!');
    }else {
        alert('Nesto');
    }
};

novostiCheckbox.onchange = function () {
    if (novostiCheckbox.checked) {
        aktivnostDiv.classList.remove('hide');
    } 
};

