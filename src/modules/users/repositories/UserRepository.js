const logger = require('winston');

const createUser = async (user) => {
	try {
		const savedUser = await this.user(user).save();
		return savedUser;
	} catch (err) {
		logger.info(err);
		// better error handling here
		throw new Error(err.stack);
	}
};

module.exports = {
	createUser,
};
