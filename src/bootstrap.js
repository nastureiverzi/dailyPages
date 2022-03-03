import { asClass, asValue, InjectionMode, createContainer } from 'awilix';
import App from './app';
import UserController from './modules/users/controllers/userController';
import UserService from './modules/users/services/userService';
import UserRepository from './modules/users/repositories/userRepository';
import config from '../config/config';

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
			UserController: asClass(UserController),
			UserService: asClass(UserService),
			UserRepository: asClass(UserRepository),
			config: asValue(config),
		});

		return container;
	}

	run(callback) {
		const app = this.instance.resolve('app');
		app.start(this.container, callback);
	}
}
