const fs = require('fs');
const http = require('http');
const url = require('url');
///////////////////////////////

/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textInto = fs.readFileSync('./txt/hello/input.txt', 'utf-8');
console.log(textIn, textInto);
//Blocking, synchronous way
const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
*/

//Non-blocking, asynchronous way
/*
fs.readFile('./txt/start.txt','utf-8', (err, data) => {
    if (err) return console.log("ERROR");
   fs.readFile(`./txt/${data}.txt`,'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`,'utf-8', (err, data3) => {
    console.log(data3);

    fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
      console.log("youur file has been written");
    })

    fs.writeFile('./txt/finals.txt', `${data2}\n${data3}`, 'utf-8', err => {
        console.log('data entered');
    })
})
})
})

console.log("will read file");
*/
//////////////////////////////////////////////
//SERVER

const server = http.createServer((req, res) => {
   const pathName = req.url;
   if(pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
   } else if (pathName === '/product') {
    res.end("this is the product");
   } else {
       res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello world',

       });
       res.end('<h1>page not found!</h1>');
   }
});

server.listen(8000, '127.0.0.3', () => {
    console.log('Listening to requests on port 8000');
})

//8000 => PORT 127.0.0.1 => ip once open 127.0.0.1



