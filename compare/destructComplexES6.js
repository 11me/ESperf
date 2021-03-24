function destructComplexES6() {
    let obj = {
        fname: 'John',
        lname: 'Doe',
        contacts: {
            number: 1234,
            email: 'john@doe.com'
        }
    }

    let {fname, contacts: {number}} = obj;
}

module.exports = {
    name: 'destructComplexES6',
    call: destructComplexES6,
    description: 'Destruct complex ES6'
}
