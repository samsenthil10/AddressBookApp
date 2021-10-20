let isUpdate = false;
let contactObject = {};

window.addEventListener('DOMContentLoaded', (event) => {

    print_state("sts");
    const name = document.querySelector('#name');
    name.addEventListener('input', validateName);

    const phone = document.querySelector('#phone');
    phone.addEventListener('input', validatePhone);

    const address = document.querySelector('#address');
    address.addEventListener('input', validateAddress);

    const zipcode = document.querySelector('#zip');
    zipcode.addEventListener('input', validateZipCode);

    const email = document.querySelector('#email');
    email.addEventListener('input', validateEmail);

});

function save(event) {

    event.preventDefault();
    event.stopPropagation();

    setContactObject();
    if (site_properties.useLocalStorage.match("true")) {
        createAndUpdateStorage();
        resetForm();
    }
}

function resetForm() {

}

function setContactObject() {
    contactObject = new Contact();
    try {
        if (!isUpdate && site_properties.useLocalStorage.match("true")) {
            contactObject.id = createNewContactID();
        }
        contactObject.fullName = getInputValueId('#name');
        contactObject.phoneNumber = getInputValueId('#phone');
        contactObject.address = getInputValueId('#address');
        contactObject.city = getInputValueId('.getCity');
        contactObject.state = getInputValueId('.getState');
        contactObject.zip = getInputValueId('#zip');
        contactObject.email = getInputValueId('#email');
        alert(contactObject);
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