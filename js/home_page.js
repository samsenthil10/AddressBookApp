window.addEventListener('DOMContentLoaded', (event) => {
    var object = document.querySelectorAll(".homepage_href")
    for (var obj of object) {
        obj.href = site_properties.homepage;
    }
    object = document.querySelectorAll(".add-contact-href")
    for (var obj of object) {
        obj.href = site_properties.addContact;
    }
});