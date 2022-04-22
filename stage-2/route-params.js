const express = require("express");
const app = express();

const { products, people } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Route Params Example</h1><a href="/api/products/1">Products</a>')
})

// ---------Here is the example of Route Params
app.get('/api/products/:productID', (req, res)=> {
    // console.log(req.params);
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