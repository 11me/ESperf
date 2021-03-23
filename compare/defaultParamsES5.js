function defaultParamsES5(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}

module.exports = {
    name: 'defaultParamsES5',
    call: defaultParamsES5,
    args: [10],
    description: 'defalt params ES5'
}
