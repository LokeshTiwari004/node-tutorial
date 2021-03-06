const path = require('path');
const express = require('express');
const app = express();

app.use(express.static("./public"));
 
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('./navbar-app/index.html'))
// })

app.all("*", (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log("Server is listening on 5000...");
})