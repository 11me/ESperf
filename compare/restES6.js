function restES6(x, y, ...a) {
    return (x + y) + a.length;
}

module.exports = {
    name: 'restES6',
    call: restES6,
    description: 'rest operator in ES6'
}
