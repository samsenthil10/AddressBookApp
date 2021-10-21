var flag = 0;

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
        document.querySelector('#submitButton').disabled = true;
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
        document.querySelector('#submitButton').disabled = true;
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
        document.querySelector('#submitButton').disabled = true;
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
        document.querySelector('#submitButton').disabled = false;
        return true;
    } catch (e) {
        setTextValue('.zipcode-error', e);
        document.querySelector('#submitButton').disabled = true;
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
    var wordCount = address.split(" ").length;
    if (wordCount > 1) {
        if (!addressRegex.test(address)) {
            throw 'Address is incorrect';
        } else return true;
    } else {
        throw 'Address Should have multiple words';
    }
}

function checkZipCode(zip) {
    let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
    if (!zipRegex.test(zip)) {
        throw 'Zip Code is incorrect';
    } else return true;
}

const setTextValue = (property, value) => {
    const text_error = document.querySelector(property);
    text_error.textContent = value;
}

function getInputValueId(id) {
    return document.querySelector(id).value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setElementValues = (cls, value) => {
    const objects = document.getElementsByTagName(cls);
    for (var object of objects) {
        object.innerHTML = value;
    }
}

const getListFromStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

function showTime() {
    const date = new Date();
    return date.toLocaleTimeString();
}