let isUpdate = false;
let contactObject = {};

window.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector('#submitButton').disabled = true;
    const name = document.querySelector('#name');
    name.addEventListener('input', validateName);

    const phone = document.querySelector('#phone');
    phone.addEventListener('input', validatePhone);

    const address = document.querySelector('#address');
    address.addEventListener('input', validateAddress);

    const zipcode = document.querySelector('#zip');
    zipcode.addEventListener('input', validateZipCode);

    checkForUpdate();
});

function save(event) {

    event.preventDefault();
    event.stopPropagation();

    setContactObject();
    if (site_properties.useLocalStorage.match("true")) {
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.homepage);
    } else {
        createOrUpdateAddressBook();
    }
}

function createOrUpdateAddressBook() {
    let postURL = site_properties.server_url;
    let methodCall = "POST";
    if (isUpdate) {
        methodCall = "PUT";
        postURL = postURL + contactObject.id.toString();
    }

    console.log(methodCall, postURL)
    makeServicecall(methodCall, postURL, true, contactObject)
        .then(responseText => {
            resetForm();
            window.location.replace(site_properties.homepage);
        })
        .catch(error => {
            throw error;
        });
}


function setContactObject() {

    try {
        if (!isUpdate && site_properties.useLocalStorage.match("true")) {
            contactObject.id = createNewContactID();
        }
        if (checkName(getInputValueId('#name')))
            contactObject._fullName = getInputValueId('#name');
        if (checkPhone(getInputValueId('#phone')))
            contactObject._phoneNumber = getInputValueId('#phone');
        if (checkAddress(getInputValueId('#address')))
            contactObject._address = getInputValueId('#address');
        contactObject._city = getInputValueId('.getCity');
        contactObject._state = getInputValueId('.getState');
        if (checkZipCode(getInputValueId('#zip')))
            contactObject._zip = getInputValueId('#zip');
        alert("Saved!");
    } catch (e) {
        throw e;
    }
}

function createAndUpdateStorage() {
    let AddressBookList = getListFromStorage('AddressBookList');
    if (AddressBookList != undefined) {
        let addressBookData = AddressBookList
            .find(contact => contact.id == contactObject.id);
        if (!addressBookData) AddressBookList.push(contactObject);
        else {
            const index = AddressBookList
                .map(contact => contact.id)
                .indexOf(addressBookData.id);
            AddressBookList.splice(index, 1, contactObject);
        }
    } else {
        AddressBookList = [contactObject];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(AddressBookList));
}

function createNewContactID() {
    let contactID = getListFromStorage('AddressBookList').length;
    contactID++;
    return contactID;
}

function resetForm() {

    setValue('#name', '');
    setValue('#address', '');
    setValue('#zip', '');
    setValue('#phone', '');
    setElementValues('error-output', '');
    setValue('#sts', '');
    populateCityOptions('state', 0);
    var pointer = document.getElementById("name");
    pointer.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function checkForUpdate() {

    const addressBookJSON = localStorage.getItem('EditContactList');
    isUpdate = addressBookJSON ? true : false;
    if (!isUpdate) return;
    contactObject = JSON.parse(addressBookJSON);
    setForm();
    localStorage.removeItem('EditContactList');
}

function setForm() {
    setValue('#name', contactObject._fullName);
    setValue('#address', contactObject._address);
    setValue('#zip', contactObject._zip);
    setValue('#phone', contactObject._phoneNumber);
    setValue('#sts', contactObject._state);
    document.querySelector('#sts').onchange();
    setValue('#state', contactObject._city);
}