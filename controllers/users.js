const logger = require('../logger');

const User = require('../models/user');

// TODO jwt authentication middleware
const createUser = async (req, res, next) => {
	try {
		const user = new User();

		user.name = req.body.name;
		user.email = req.body.email;
		// TODO: salt password
		user.password = req.body.password;

		const savedUser = await user.save();

		return res.sendStatus(200).json({ message: 'Created new user', savedUser });
	} catch (err) {
		logger.error(`Error saving user: ${err.stack}`);
		return res.sendStatus(500);
	}
};

const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		return res.status(200).json({ message: 'Found user', user });
	} catch (err) {
		logger.error(`Error geting user: ${err.stack}.`);

		return res.send(500);
	}
};

const updateUser = async (req, res, next) => {
	try {
		if (!req.body) {
			return res
				.sendStatus(400)
				.json({ message: 'No data provided for update. Abort.' });
		}

		const data = await User.findByIdAndUpdate(req.params.id, req.body);

		if (!data) {
			return res.sendStatus(404).json({ message: 'User was not found.' });
		}

		return res.sendStatus(200).json({ message: 'User updated succesfully.' });
	} catch (err) {
		logger.error(`Error updating user: ${err.stack}`);

		return res.send(500);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const data = await User.findByIdAndDelete(req.params.id);

		if (!data) {
			return res.sendStatus(404).json({ message: 'User was not found.' });
		}

		return res.sendStatus(200).json({ message: 'User deleted successfully.' });
	} catch (err) {
		logger.error(`Error deleting user: ${err.stack}`);
		return res.sendStatus(500);
	}
};

// TODO login, also with 3rd party APIs
const loginUser = (req, res, next) => {};

module.exports = {
	createUser,
	loginUser,
	getUser,
	updateUser,
	deleteUser,
};
