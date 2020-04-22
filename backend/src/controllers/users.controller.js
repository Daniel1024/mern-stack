module.exports = {
    getUsers(req, res) {
        res.json({message: []})
    },
    createUser(req, res) {
        res.json({message: 'User Saved'})
    },
    deleteUser(req, res) {
        res.json({message: 'User Deleted'})
    }
};
