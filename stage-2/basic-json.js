const express = require("express");
const app = express();

const { products, people } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts);
})

app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})