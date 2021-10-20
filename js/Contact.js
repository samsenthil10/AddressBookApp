class Contact {

    get fullName() {
        return this._fullName;
    }

    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if (nameRegex.test(fullName))
            this._fullName = fullName;
        else throw 'Full Name Is Incorrect';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp('^(\\b[\\w]{3,}\\s*)+$');
        var wordCount = address.split(" ").length;
        if (wordCount > 1) {
            if (addressRegex.test(address))
                this._address = address;
            else
                throw 'Address Is Incorrect';
        } else
            throw 'Address should be of multiple words';
    }

    get city() {
        return this._city;
    }

    set city(city) {

        this._city = city;
    }


    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }


    get zip() {
        return this._zip;
    }

    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if (zipRegex.test(zip)) this._zip = zip;
        else throw 'Zip Is Incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([\\+]?\\d{2})?[\\s]?\\d{10}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number Is Incorrect';
    }

    toString() {
        return "Full Name = " + this._fullName + ", Address = " + this._address +
            ", City = " + this._city + ", State = " + this._state +
            ", Zip = " + this._zip + ", Phone Number = " + this._phoneNumber;
    }
}