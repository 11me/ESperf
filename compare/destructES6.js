function destructES6() {
    let obj = {
        fname: 'John',
        lname: 'Doe'
    }

    let {fname} = obj;
}

module.exports = {
    name: 'destructES6',
    call: destructES6,
    description: 'destructuring in ES6'
}
