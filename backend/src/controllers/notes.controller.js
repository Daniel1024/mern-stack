module.exports = {
    getNotes(req, res) {
        res.json({message: []})
    },
    createNote(req, res) {
        res.json({message: 'Note Saved'})
    },
    getNote(req, res) {
        res.json({title: 'asdasdasd'})
    },
    updateNote(req, res) {
        res.json({message: 'Note Updated'})
    },
    deleteNote(req, res) {
        res.json({message: 'Note Deleted'})
    }
};
