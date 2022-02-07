const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.route('/').get(userCtrl.getUser).post(userCtrl.createUser);
router.route('/:id').put(userCtrl.updateUser).delete(userCtrl.deleteUser);

module.exports = router;