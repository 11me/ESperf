function defaultParamsES6(x, y = 2, z = 3) {
    return x + y + z;
}

module.exports = {
    name: 'defaultParamsES6',
    call: defaultParamsES6,
    args: [10],
    description: 'defalt params ES6'
}
