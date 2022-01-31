const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

router.route('/').get(userCtrl.getUser).post(userCtrl.createUser);
router.route('/:id').put(userCtrl.updateUser).delete(userCtrl.deleteUser);
