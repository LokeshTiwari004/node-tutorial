const express = require("express");
const app = express();

const logger = require('./logger')
const authorize = require('./authorize')


app.use(logger, authorize)


app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    console.log(req.url);
    res.status(200).send('Products Page')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.status(200).send('iTEMS Page')
})




app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})