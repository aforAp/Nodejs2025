const fs = require("fs");

//Blocking synchronous way
const textIn = fs.readFileSync('../txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = "i am satheesh";
fs.writeFileSync('../txt/output.txt', textOut);
console.log('File Writter');


//Non-blocking asynchronous way
fs.readFile('../txt/start.txt', 'utf-8', (err, data) => {
   fs.writeFile('../txt/examples.txt', `${data}\n hello how are you????`, 'utf-8', err => {
    console.log("File has been written");
   })
})
console.log('File Writter');