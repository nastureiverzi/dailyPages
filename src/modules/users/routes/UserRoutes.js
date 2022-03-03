import express from 'express';
import userCtrl from '../controllers/userController';

const router = express.Router();

router.route('/').post(userCtrl.createUser);
router.route('/login').post(userCtrl.loginUser);
router
	.route('/:id')
	.get(userCtrl.getUser)
	.put(userCtrl.updateUser)
	.delete(userCtrl.deleteUser);

export default router;
