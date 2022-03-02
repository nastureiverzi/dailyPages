import awilix from 'awilix';
import UserController from './modules/users/controllers/UserController';
import UserService from './modules/users/services/UserService';
import UserRepository from './modules/users/repositories/UserRepository';
import DBConnect from '../config/DBConnect';
import config from '../config/config';

export default class Bootstrap {
	constructor() {
		this.container = awilix.createContainer({
			injectionMode: awilix.InjectionMode.PROXY,
		});
	}

	setup() {
		this.container.register({
			UserController: awilix.asClass(UserController),
			UserService: awilix.asClass(UserService),
			UserRepository: awilix.asClass(UserRepository),
			DBConnect: awilix.asClass(DBConnect),
			config: awilix.asValue(config),
		});
	}
}
