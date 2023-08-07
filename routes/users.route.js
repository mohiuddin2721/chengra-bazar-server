const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const verifyToken = require('../middleware/verifyToken');
const authorization = require('../middleware/authorization');

router.route('/')
    .get(verifyToken, authorization('admin'), userController.getUser)
    .post(userController.createUser)

router.route('/:id')
    .patch(userController.updateUserRoleById)
    .delete(userController.removeUserById);

router.post('/jwt', userController.getJwt)
router.get('/admin/:email', verifyToken, userController.getAdminUser)
router.get('/storeManager/:email', verifyToken, userController.getStoreManagerUser)

module.exports = router;