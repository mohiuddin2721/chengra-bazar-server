const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const verifyToken = require('../middleware/verifyToken');

router.route('/')
    .get(verifyToken ,userController.getUser)
    .post(userController.createUser)

router.route('/:id')
    .patch(userController.updateUserRoleById)
    .delete(userController.removeUserById);

router.post('/jwt', userController.getJwt)

module.exports = router;