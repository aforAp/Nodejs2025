/* in this below code will learn how to create a server and how to route the server */

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
