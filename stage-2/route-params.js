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

app.get('/api/products/:productID', (req, res)=> {
    console.log(req.params);
    const { productID } = req.params;
    
    const specificProduct = products.find((product) => product.id === Number(productID))
    
    if (!specificProduct) {
        res.status(404).send('Cannot find that Product');
        return
    }

    res.json(specificProduct);
})

app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})