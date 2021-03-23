function swapES5() {
    var a = 1,
        b = 2;
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];
    _ref;
}

module.exports = {
    name: 'swapES5',
    call: swapES5,
    description: 'swap vars in ES5'
}
