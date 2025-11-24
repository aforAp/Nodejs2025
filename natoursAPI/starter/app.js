const express = require("express");
const fs = require("fs");
const app = express();
const morgan = require("morgan");
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//1.middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
//it helps us to understand the server the data was come from postman, frontend and mobile apps....

//creating middleware
app.use((req, res, next) => {
    console.log("hello from the middleWare");
    next();
});


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);







//app.patch('/api/v1/tours/:id',updateTour);
//app.delete('/api/v1/tours/:id',deleteTour);
//app.post(`api/v1/tours`, createTour);
//app.get('/api/v1/tours', getAllTours);
//app.get(`/api/v1/tours/:id`, getTour);
// app.post(`/api/v1/tours`, (req, res) => {
//  console.log(req.body);
//    res.send('Done');
// })

//now we dont have the hello from the middle ware
//routes



//SERVERS

const port = 3000;

app.listen(port, '127.0.0.1', () => {
    console.log(`App running on port ${port}.....`);
});