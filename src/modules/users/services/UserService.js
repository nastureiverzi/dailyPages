export default class UserService {
	constructor({ userRepository }) {
		this.userRepository = userRepository;
	}

	async createUser(user) {
		try {
			const savedUser = await this.userRepository.createUser(user);
			return savedUser;
		} catch (err) {
			throw new Error(err.stack);
		}
	}
}
