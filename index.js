const {performance} = require('perf_hooks');
const fs = require('fs');

// load files
const pathCompare = './compare';
const loadedModules = []; // array of loaded modules
const files = fs.readdirSync(pathCompare);
for (let i = 0; i < files.length; i++) {
    loadedModules[i] = require(`${pathCompare}/${files[i]}`);
}

// measure function
const measure = (n, stream, callback, args) => {

    while (n) {
        const start = performance.now();
        args ? callback(...args) : callback();
        stream.write(`${performance.now() - start}\n`);
        n--;
    }
}

// number of iterations
const iterations = 100000;

// output dir
const out = 'output';

// measure in the loop and save the results
for (mod of loadedModules) {
    const writeStream = fs.createWriteStream(`${out}/${mod.name}.csv`);
    writeStream.write(`${mod.description}\n`);
    mod.args ? measure(iterations, writeStream, mod.call, mod.args)
        : measure(iterations, writeStream, mod.call, mod.args);
}
