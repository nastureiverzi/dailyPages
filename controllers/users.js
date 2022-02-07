const logger = require('../logger');

const User = require('../models/user');

const createUser = async (req, res, next) => {
	try {
		const user = await User.save(req.body);
		return res.status(200).json({ message: 'Created new user', user });
	} catch (err) {
		res.send(500);
		logger.error(`User save error: ${err.stack}`);
	}
};

const getUser = async (req, res, next) => {
	try {
		console.log(req);
		const user = await User.findById(req);
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}
		return res.status(200).json({ message: 'Found user', user });
	} catch (err) {
		res.send(500);
		logger.error(err.stack);
	}
};

const updateUser = (req, res, next) => {};

const deleteUser = (req, res, next) => {};

module.exports = {
	createUser,
	getUser,
	updateUser,
	deleteUser,
};
