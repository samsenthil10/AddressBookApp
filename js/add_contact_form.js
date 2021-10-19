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