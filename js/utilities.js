function validateName() {

    const name = document.querySelector('#name');
    if (name.value.length == 0) {
        setTextValue('.name-error', '');
        return false;
    }
    try {
        checkName(name.value);
        setTextValue('.name-error', '');
        return true;
    } catch (e) {
        setTextValue('.name-error', e);
        throw e;
    }
}

function validatePhone() {

    const phone = document.querySelector('#phone');
    if (phone.value.length == 0) {
        setTextValue('.phone-error', '');
        return false;
    }
    try {
        checkPhone(phone.value);
        setTextValue('.phone-error', '');
        return true;
    } catch (e) {
        setTextValue('.phone-error', e);
    }
}

function validateAddress() {

    const address = document.querySelector('#address');
    if (address.value.length == 0) {
        setTextValue('.address-error', '');
        return false;
    }
    try {
        checkAddress(address.value);
        setTextValue('.address-error', '');
        return true;
    } catch (e) {
        setTextValue('.address-error', e);
    }
}

function validateZipCode() {

    const zip = document.querySelector('#zip');
    if (zip.value.length == 0) {
        setTextValue('.zipcode-error', '');
        return false;
    }
    try {
        checkZipCode(zip.value);
        setTextValue('.zipcode-error', '');
        return true;
    } catch (e) {
        setTextValue('.zipcode-error', e);
    }
}

function validateEmail() {

    const email = document.querySelector('#email');
    if (email.value.length == 0) {
        setTextValue('.email-error', '');
        return false;
    }
    try {
        checkEmail(email.value);
        setTextValue('.email-error', '');
        return true;
    } catch (e) {
        setTextValue('.email-error', e);
    }
}

function checkName(name) {

    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
    if (!nameRegex.test(name)) {
        throw 'Name is incorrect';
    } else return true;
}

function checkPhone(phone) {
    let phoneRegex = RegExp('^([\\+]?\\d{2})?[\\s]?\\d{10}$');
    if (!phoneRegex.test(phone)) {
        throw 'Phone is incorrect';
    } else return true;
}

function checkAddress(address) {
    let addressRegex = RegExp('^(\\b[\\w]{3,}\\s*)+$');
    if (!addressRegex.test(address)) {
        throw 'Address is incorrect';
    } else return true;
}

function checkZipCode(zip) {
    let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
    if (!zipRegex.test(zip)) {
        throw 'Zip Code is incorrect';
    } else return true;
}

function checkEmail(email) {
    let emailRegex = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    if (!emailRegex.test(email)) {
        throw 'Email is incorrect';
    } else return true;
}

const setTextValue = (property, value) => {
    const text_error = document.querySelector(property);
    text_error.textContent = value;
}