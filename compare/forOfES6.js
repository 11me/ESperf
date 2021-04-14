function forOf(arr) {
    for (let el of arr) {
        el += 1;
    }
}

module.exports = {
    name: 'forOfES6',
    call: forOf,
    args: [[1, 2, 3]],
    description: 'for of loop'
}
