const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Welcome ${name}`)
})

module.exports = router;