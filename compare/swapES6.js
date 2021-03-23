function swapES6() {
    let a = 1, b = 2;

    [a, b] = [b, a];
}

module.exports = {
    name: 'swapES6',
    call: swapES6,
    description: 'swap vars in ES6'
}
