const Note = require('../models/Note');

module.exports = {
    async getNotes(req, res) {
        const notes = await Note.find();
        res.json(notes);
    },
    async createNote(req, res) {
        const {title, content, author} = req.body;
        const newNote = new Note({
            title,
            content,
            author
        });
        await newNote.save();
        res.json({message: 'Note Saved'})
    },
    async getNote(req, res) {
        const {id} = req.params;
        const note = await Note.findById(id);
        res.json(note)
    },
    async updateNote(req, res) {
        const {id} = req.params;
        const {title, content, author} = req.body;
        await Note.findOneAndUpdate({_id: id}, {
            title,
            content,
            author
        });

        res.json({message: 'Note Updated'})
    },
    async deleteNote(req, res) {
        const {id} = req.params;
        await Note.findOneAndDelete({_id: id});
        res.json({message: 'Note Deleted'})
    }
};
