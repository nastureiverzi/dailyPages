import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV;

const dev = {
	app: {
		port: parseInt(process.env.DEV_APP_PORT, 10) || 3000,
		origin: process.env.DEV_CORS_ORIGIN,
	},
	db: {
		host: process.env.DEV_DB_HOST || 'localhost',
		port: parseInt(process.env.DEV_DB_PORT, 10) || 27107,
		name: process.env.DEV_DB_NAME || 'db',
		user: process.env.DEV_DB_USER,
		pass: process.env.DEV_DB_PASS,
		authSource: process.env.DEV_DB_AUTH,
	},
};
const test = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT, 10) || 3000,
	},
	db: {
		host: process.env.TEST_DB_HOST || 'localhost',
		port: parseInt(process.env.TEST_DB_PORT, 10) || 27017,
		name: process.env.TEST_DB_NAME || 'test',
	},
};

const config = {
	dev,
	test,
};

export default config[env];
