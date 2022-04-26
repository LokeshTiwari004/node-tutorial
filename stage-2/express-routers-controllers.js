const express = require("express");
const app = express();

const people = require('./routes/people');
const authorization = require('./routes/auth');

// this serves all static resource in method-public folder
app.use(express.static('./methods-public'));

// parse body data
app.use(express.urlencoded({ extended: false }))

// parse JSON response and stores it in body
app.use(express.json())


app.use('/api/people', people);
app.use('/auth', authorization);

app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})