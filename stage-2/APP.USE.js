const express = require("express");
const app = express();

const logger = require('./logger')

// ---- order or position of app.use() in code matters


// app.use(logger) // ---- if you use app.use here it will applied to every route

app.use('/api', logger) // ---- it will applied to all routes with base /api



app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})


// app.use(logger) // ---- if you use app.use here it will applied to every route except '/' ( home route)


app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    console.log(req.url);
    res.status(200).send('Products Page')
})

app.get('/api/items', (req, res) => {
    res.status(200).send('iTEMS Page')
})




app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})