/* eslint-disable class-methods-use-this */
/* eslint-disable no-tabs */
// const logger = require('../../../../logger');

export default class UserController {
	constructor(userService) {
		this.userService = userService;
	}

	createUser() {}

	getUser() {}

	updateUser() {}

	deleteUser() {}

	loginUser() {}
}
// TODO jwt authentication middleware
// const createUser = async (req, res, next) => {
// 	try {
// const user = new User();
// user.name = req.body.name;
// user.email = req.body.email;
// // TODO: salt password
// user.password = req.body.password;
// const savedUser = await user.save();
// res.status(200).json({ message: 'Created new user', savedUser });
// } catch (err) {
// 	logger.error(`Error saving user: ${err.stack}`);
// 	next(err);
// 	}
// };

// const getUser = async (req, res, next) => {
// 	try {
// 		const user = await User.findById(req.params.id);

// 		if (!user) {
// 			res.status(404).json({ message: 'User not found.' });
// 		}

// 		res.status(200).json({ message: 'Found user', user });
// 	} catch (err) {
// 		logger.error(`Error geting user: ${err.stack}.`);
// 		next(err);
// 	}
// };

// const updateUser = async (req, res, next) => {
// 	try {
// 		if (!req.body) {
// 			res.status(400).json({ message: 'No data provided for update. Abort.' });
// 			return;
// 		}

// 		const data = await User.findByIdAndUpdate(req.params.id, req.body);

// 		if (!data) {
// 			res.status(404).json({ message: 'User was not found.' });
// 			return;
// 		}

// 		res.status(200).json({ message: 'User updated succesfully.' });
// 	} catch (err) {
// 		logger.error(`Error updating user: ${err.stack}`);
// 		next(err);
// 	}
// };

// const deleteUser = async (req, res, next) => {
// 	try {
// 		const data = await User.findByIdAndDelete(req.params.id);

// 		if (!data) {
// 			res.status(404).json({ message: 'User was not found.' });
// 			return;
// 		}

// 		res.status(200).json({ message: 'User deleted successfully.' });
// 	} catch (err) {
// 		logger.error(`Error deleting user: ${err.stack}`);
// 		next(err);
// 	}
// };

// TODO login, also with 3rd party APIs
// const loginUser = (req, res, next) => {};
