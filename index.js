/*
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require("slugify");
const replaceTemplate = require('./modules/replaceTemplate');
///////////////////////////////


const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textInto = fs.readFileSync('./txt/hello/input.txt', 'utf-8');
console.log(textIn, textInto);
//Blocking, synchronous way
const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');


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



/*

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);
const slugs = dataObj.map(el => slugify(el.productName,{lower: true}));
console.log(slugs);
//we need the data at once so we can use sync versionss.and it will excuted at once


const server = http.createServer((req, res) => {
    console.log("The data was");
    console.log(req.url);
    console.log(url.parse(req.url, true));
   const {query, pathname} = url.parse(req.url, true);

   //overview
   if(pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {'Content-type': 'text/html'});
    const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(output);

    //product
   } else if (pathname === '/product') {
    res.writeHead(200, {'Content-type': 'text/html'})
    const productId = Number(query.id);
    const product = dataObj[productId];
    console.log(product);
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
   }
  
   else if (pathname === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(data);
   } 
   else {
       res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello world',

       });
       res.end('<h1>page not found!</h1>');
   }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000");
})

//8000 => PORT 127.0.0.1 => ip once open 127.0.0.1

*/


