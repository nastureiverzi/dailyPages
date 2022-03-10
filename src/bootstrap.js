import {
	asClass,
	asValue,
	InjectionMode,
	createContainer,
	asFunction,
} from 'awilix';
import App from './modules/app.js';
import UserService from './modules/users/services/userService.js';
import UserRepository from './modules/users/repositories/userRepository.js';
import config from '../config/config.js';

export default class Bootstrap {
	constructor() {
		this.container = Bootstrap.createContainer();
	}

	static createContainer() {
		const container = createContainer({
			injectionMode: InjectionMode.PROXY,
		});

		container.register({
			app: asClass(App).singleton(),
			userService: asClass(UserService),
			userRepository: asClass(UserRepository),
			config: asValue(config),
		});

		return container;
	}

	run(callback) {
		const app = this.container.resolve('app');
		app.start(callback);
	}
}
