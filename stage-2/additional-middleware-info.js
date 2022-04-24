const express = require("express");
const app = express();

const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');


// ---- we can make our own middleware 
// app.use(logger)


// ---- we also have third party middleware
// ---- like 'morgan' similar to our morgan but have more options
// ====> npm i morgan
// ====> const morgan = require('morgan')
// ====> app.use(morgan('tiny'))
app.use(morgan('dev'));


// ---- we have express` built-in middleware 
app.use(express.static('./public'));


app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    res.status(200).send('Products Page')
})

// ---- we can use multiple middleware for specific route
app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.status(200).send('iTEMS Page')
})




app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})