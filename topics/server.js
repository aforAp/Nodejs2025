/* in this below code will learn how to create a server and how to route the server */

//SERVER

const fs = require("fs");
const http = require("http");
const urls = require("url");
const textIn = fs.readFileSync('../txt/input.txt', 'utf-8');
const textInto = fs.readFileSync('../txt/hello/input.txt', 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/../templates/template-card.html`, 'utf-8');
console.log(textIn, textInto);
//Blocking, synchronous way
const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('../txt/output.txt', textOut);
console.log('File written');

const datas = fs.readFileSync(`${__dirname}/../dev-data/data.json`, 'utf-8', (err, data) => {

})

const data2 = JSON.parse(datas);

const server = http.createServer((req, res) => {
   console.log("The data was");
       console.log(req.url);
       console.log(urls.parse(req.url, true));
      const {query, pathname} = urls.parse(req.url, true);

  // Routing
 if(pathname === '/html'){
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end(templateCard);
 }
  else if (pathname === "/hello") {
 res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is hello page");
  }
  else if (pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the overview");
  }
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the product page");
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found!</h1>");
  }

})

    server.listen(8000, '127.0.0.2', () => {
        console.log("the server was running");
    })
/*
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
*/
/*

const fs = require("fs");
const http = require("http");

// Read files
const textIn = fs.readFileSync('../txt/input.txt', 'utf-8');
const textInto = fs.readFileSync('../txt/hello/input.txt', 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/../templates/template-card.html`, 'utf-8');
const datas = fs.readFileSync(`${__dirname}/../dev-data/data.json`, 'utf-8');
const data2 = JSON.parse(datas);

console.log(textIn, textInto);

const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('../txt/output.txt', textOut);
console.log('File written');

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = myURL.pathname;

  // Routing
  if (pathname === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(templateCard);
  } else if (pathname === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is hello page");
  } else if (pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the overview");
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the product page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, '127.0.0.2', () => {
  console.log("Server running at http://127.0.0.2:8000");
});*/
