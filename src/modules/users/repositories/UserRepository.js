const logger = require('../../../../logger');
const UserModel = require('../models/userModel');

export default class UserRepository {
	constructor() {
		this.user = new UserModel();
	}

	async createUser(user) {
		try {
			const savedUser = await this.user(user).save();
			return savedUser;
		} catch (err) {
			logger.info(err);
			// better error handling here
			throw new Error(err.stack);
		}
	}

	// updateUser() {}

	// getUser() {}

	// deleteUser() {}
}
