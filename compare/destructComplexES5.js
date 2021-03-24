function destructComplexES5() {
    var obj = {
        fname: 'John',
        lname: 'Doe',
        contacts: {
            number: 1234,
            email: 'john@doe.com'
        }
    };
    var fname = obj.fname,
        number = obj.contacts.number;
}

module.exports = {
    name: 'destructComplexES5',
    call: destructComplexES5,
    description: 'Destruct complex ES5'
}
