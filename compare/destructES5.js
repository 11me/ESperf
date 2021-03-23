function destructES5() {
    var obj = {
        fname: 'John',
        lname: 'Doe'
    };
    var fname = obj.fname;
}

module.exports = {
    name: 'destructES5',
    call: destructES5,
    description: 'destructuring in ES5'
}
