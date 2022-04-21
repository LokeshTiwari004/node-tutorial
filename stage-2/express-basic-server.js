// const app = require('express')();
//  OR
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit the server');
    res.status(200).send('Hello Express')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Express')
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5000, () => {
    console.log("Listening on PORT 5000...");
})
