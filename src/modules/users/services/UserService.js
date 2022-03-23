const userRepository = require('../repositories/userRepository');

const createUser = async (user) => {
	try {
		const savedUser = await userRepository.createUser(user);
		return savedUser;
	} catch (err) {
		throw new Error(err.stack);
	}
};

module.exports = {
	createUser,
};
