const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        const users = await User.find();
        res.json(users);
    },
    async createUser(req, res) {
        const {username} = req.body;
        const newUser = new User({username});
        await newUser.save();
        res.json({message: 'User Saved'});
    },
    async deleteUser(req, res) {
        const {id} = req.params;
        await User.findOneAndDelete({_id: id});
        res.json({message: 'User Deleted'});
    }
};
