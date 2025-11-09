const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textInto = fs.readFileSync('./txt/hello/input.txt', 'utf-8');
console.log(textIn, textInto);
//Blocking, synchronous way
const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');

//Non-blocking, asynchronous way




