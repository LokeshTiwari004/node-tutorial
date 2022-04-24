const express = require("express");
const app = express();

const { people } = require('./data');

// this serves all static resource in method-public folder
app.use(express.static('./methods-public'));

// parse body data
app.use(express.urlencoded({ extended: false }))

// parse JSON response and stores it in body
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name: person } = req.body;
    if (person) {
        res.status(201).json({ success: true, person })
        return
    }
    res.status(400).json({ success: false, msg: 'Please Specify Credentials'});
})


app.post('/login', (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Welcome ${name}`)
})


app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})