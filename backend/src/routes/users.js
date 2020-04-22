const {Router} = require('express');
const users = require('../controllers/users.controller');
const router = Router();

router.route('/')
    .get(users.getUsers)
    .post(users.createUser);

router.route('/:id')
    .delete(users.deleteUser());

module.exports = router;
