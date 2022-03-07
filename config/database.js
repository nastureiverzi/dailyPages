import mongoose from 'mongoose';
import config from './config.js';
import logger from '../logger.js';

export default class Database {
	static async connect() {
		const connString = `mongodb://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=${config.db.authSource}`;
		try {
			await mongoose.connect(connString);
			logger.info('Database connected.');
		} catch (error) {
			logger.error(`Database connection failed with error ${error.stack}`);
			process.exit(1);
		}
	}
}
