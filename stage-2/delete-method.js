const express = require("express");
const app = express();

const { people } = require('./data');

// this serves all static resource in method-public folder
app.use(express.static('./methods-public'));

// parse body data
app.use(express.urlencoded({ extended: false }))

// parse JSON response and stores it in body
app.use(express.json())

// here is the example of a delete method
app.delete("/api/people/:id", (req, res) => {
    const { id } = req.params
    const index = people.findIndex(person => Number(person.id) === id)
    if (!(index + 1)) {
        res.status(404).json({ success: false, msg: `No Person With ID ${id}` })
        return
    }
    people.splice(index, 1);
    res.status(200).json({ success: true, msg: " Person Removed" })
})




//  here is the example of put request
app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    if (id in people.map(person => person.id)) {
        const { name } = req.body;
        console.log(id, name);
        people[id - 1].name = name;
        if (name) {
            res.status(200).json({ success: true, people })
            return
        }
        res.status(400).json({ success: false, msg: "Please provide a update value" })
        return
    }
    res.status(404).json({ success: false, msg: `No Person With ID ${id}` })

    // =========OR===========

    // const {id} = req.params
    // const index = people.findIndex(person => person.id === Number(id))
    // if (!(index + 1)){
    //     res.status(400).json({success: false, msg: "Person ID doesn't exists"})
    //     return
    // }
    // const {name} = req.body
    // if (!name) {
    //     res.status(400).json({success: false, msg: "Please provide a update value"})
    //     return
    // }
    // people[index].name = name
    // res.status(200).json({success: true, data: people})
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name: person } = req.body;
    if (person) {
        res.status(201).json({ success: true, person })
        return
    }
    res.status(400).json({ success: false, msg: 'Please Specify Credentials' });
})

app.post("/api/postman", (req, res) => {
    const { name } = req.body;
    people.push({ id: people.length + 1, name });
    if (name) {
        res.status(201).json({ success: true, data: people });
        return
    }

    res.status(400).json({ success: false, msg: "bad request" })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Welcome ${name}`)
})


app.listen(3000, () => {
    console.log("Server is Listening On PORT 3000...");
})