function restES5(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
}

module.exports = {
    name: 'restES5',
    call: restES5,
    description: 'rest simulation in ES5'
}
