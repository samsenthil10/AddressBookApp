let AddressBookList = [];
window.addEventListener('DOMContentLoaded', (event) => {

    if (site_properties.useLocalStorage.match("true")) {
        EmployeePayrllDataList = getDataFromLocalStorage();
    }
    var object = document.querySelectorAll(".homepage_href")
    for (var obj of object) {
        obj.href = site_properties.homepage;
    }
    object = document.querySelectorAll(".add-contact-href")
    for (var obj of object) {
        obj.href = site_properties.addContact;
    }
});

function getDataFromLocalStorage() {
    AddressBookList = localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];
    processAddressBookDataResponse();
}

function processAddressBookDataResponse() {
    document.querySelector('.person-count').textContent = AddressBookList.length;
    createInnerHtml();
    localStorage.removeItem('editContact');
}

function createInnerHtml() {
    const headerHtml = `<th>Full Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone Number</th>
                        <th>Actions</th>`;
    let addressBookData = AddressBookList;
    if (addressBookData.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contact of addressBookData) {
        innerHtml += `
        <tr>
            <td>${contact._fullName}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td class="actions">
                <img id="${contact.id}" onclick="remove(this)" alt="delete" 
                src="../assets/icons/delete-black-18dp.svg">
                <img id="${contact.id}" alt="edit" onclick="update(this)" 
                src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}