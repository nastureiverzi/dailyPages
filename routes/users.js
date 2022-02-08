const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.route('/').post(userCtrl.createUser);
router.route('/login').post(userCtrl.loginUser);
router
	.route('/:id')
	.get(userCtrl.getUser)
	.put(userCtrl.updateUser)
	.delete(userCtrl.deleteUser);

module.exports = router;
