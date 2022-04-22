const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().toISOString());
    next()
}

app.get('/', logger, (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', logger, (req, res) => {
    res.status(200).send('About Page')
})

app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})