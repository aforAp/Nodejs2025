const EventEmitter = require("events");
const http = require("http");
//create a emitter

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale');
})
//on is the eventlistenent

myEmitter.on('newSale', () => {
    console.log("Customer name: Satheesh");
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stocks`)
});


myEmitter.emit("newSale", 9);

////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
    res.end("Request Received");
})

server.on("request", (req, res) => {
    console.log("another request");
})

server.on("close", () => {
    console.log("Closed");
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for the requests.......');
});