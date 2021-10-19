class Contact {

    get fullName() {
        return this._fullName;
    }

    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"')
        if (nameRegex.test(fullName))
            this._fullName = fullName;
        else throw 'Full Name Is Incorrect';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if (cityRegex.test(address))
            this._address = address;
        else throw 'Address Is Incorrect';
    }

    get city() {
        return this._city;
    }

    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if (cityRegex.test(city))
            this._city = city;
        else throw 'City Is Incorrect';
    }


    get state() {
        return this._state;
    }

    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$')
        if (stateRegex.test(state)) this._state = state;
        else throw 'State Is Incorrect';
    }


    get zip() {
        return this._zip;
    }

    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if (zipRegex.test(zip)) this._zip = zip;
        else throw 'Zip Is Incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$')
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number Is Incorrect';
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        if (emailRegex.test(email))
            this._email = email;
        else throw 'Email Is Incorrect';
    }


    toString() {
        return "Full Name = " + this._fullName + ", Address = " + this._address +
            ", City = " + this._city + ", State = " + this._state +
            ", Zip = " + this._zip + ", Phone Number = " + this._address.phoneNumber + ", Email = " + this._email;
    }
}