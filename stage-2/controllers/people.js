
const { people } = require('../data');


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
};

const addPerson = (req, res) => {
    const { name: person } = req.body;
    if (person) {
        people.push({ id: people.map(person => person.id).reduce((a, b) => Math.max(a, b)) + 1, name: person });
        res.status(201).json({ success: true, person })
        return
    }
    res.status(400).json({ success: false, msg: 'Please Specify Credentials' });
};

const addPersonPostman = (req, res) => {
    const { name } = req.body;
    if (name) {
        people.push({ id: people.map(person => person.id).reduce((a, b) => Math.max(a, b)) + 1, name });
        res.status(201).json({ success: true, data: people });
        return
    }

    res.status(400).json({ success: false, msg: "bad request" })
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    if (people.some(person => person.id === Number(id))) {
        const { name } = req.body;
        if (name) {
            people[people.findIndex(person => person.id === Number(id))].name = name;
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
    //     res.status(400).json({success: false, msg: `No Person witH ID ${id}`})
    //     return
    // }
    // const {name} = req.body
    // if (!name) {
    //     res.status(400).json({success: false, msg: "Please provide a update value"})
    //     return
    // }
    // people[index].name = name
    // res.status(200).json({success: true, data: people})
};

const deletePerson = (req, res) => {
    const { id } = req.params
    const index = people.findIndex(person => person.id === Number(id))
    if (!(index + 1)) {
        res.status(404).json({ success: false, msg: `No Person With ID ${id}` })
        return
    }
    people.splice(index, 1);
    res.status(200).json({ success: true, data: people })
};


module.exports = {
    getPeople,
    addPerson,
    addPersonPostman,
    updatePerson,
    deletePerson,
}