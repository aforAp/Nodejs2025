const fs = require("fs");
const server = require("http").createServer();

server.on('request', (req, res) => {
    //solution 1
    // fs.readFile("./read-this.txt", (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // })
//solution2 : Streams
const readable = fs.createReadStream('./read-this.txt');
readable.on('data', chunk => {
    res.write(chunk);
})
readable.on('end', () => {
    res.end();
    //it will end the streaming no more streaming
    //without this solution nor more file will be send....

})
readable.on("error", err => {
    console.log(err);
    res.end('File not found');
    res.statusCode(500);
})

//Solution 3:

const readable1 = fs.createReadStream('./read-this.txt');
readable1.pipe(res);
//pipe will be help us to hanlde the stream based on the data in & out it will handle the faster operations
//it be at controlled

});

server.listen(8000, '127.0.0.7', () => {
    console.log('Listening.....');
})