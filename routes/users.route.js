const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.route('/')
    .get(userController.getUser)
    .post(userController.createUser)

router.route('/:id')
    .patch(userController.updateUserRoleById)
    .delete(userController.removeUserById);

module.exports = router;