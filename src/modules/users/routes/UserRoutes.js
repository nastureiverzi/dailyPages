/* eslint-disable no-tabs */
const express = require('express');

const userCtrl = require('../controllers/userController');

const router = express.Router();

router.route('/').post(userCtrl.createUser);
// router.route('/login').post(userCtrl.loginUser);
// router
// 	.route('/:id')
// 	.get(userCtrl.getUser)
// 	.put(userCtrl.updateUser)
// 	.delete(userCtrl.deleteUser);

module.exports = router;
