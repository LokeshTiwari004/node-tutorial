const express = require('express');

const router = express.Router();

const {
    getPeople,
    addPerson,
    addPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');


// router.get('/', getPeople)
// router.post('/', addPerson)
// router.post("/postman", addPersonPostman)
// router.put("/:id", updatePerson)
// router.delete("/:id", deletePerson)

// ===========OR==================

router.route('/').get(getPeople).post(addPerson);
router.route('/postman').post(addPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);



module.exports = router;