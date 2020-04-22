const {Router} = require('express');
const notes = require('../controllers/notes.controller');
const router = Router();

router.route('/')
    .get(notes.getNotes)
    .post(notes.createNote);

router.route('/:id')
    .get(notes.getNote)
    .put(notes.updateNote)
    .delete(notes.deleteNote);

module.exports = router;
