const express = require("express");
const app = express();

const { products, people } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Query Params Example</h1><a href="/api/v1/filter">Products</a>')
})


// ------Here is the Example of Query Params
app.get('/api/v1/filter', (req, res) => {
    // console.log(req.query);
    const {search, limit} = req.query;
    let newProducts = [...products];
    if (search) {
        newProducts = newProducts.filter((product) => product.name.startsWith(search));
        console.log(newProducts);
    }

    if (limit) {
        newProducts = newProducts.slice(0, Number(limit));
    }


    res.status(200).json({ success: true,  data: newProducts})
    
    //  ---OR---

    // if (newProducts.length) {
    //     res.status(200).json(newProducts)
    // } else {
    //     res.status(200).send('No Match Found')
    // }

})


app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})