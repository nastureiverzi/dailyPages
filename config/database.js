const mongoose = require('mongoose');
const config = require('./config');
const logger = require('../logger');

const dbConnect = async () => {
	const connString = `mongodb://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=${config.db.authSource}`;

	try {
		await mongoose.connect(connString);

		logger.info('Database connected.');
	} catch (error) {
		logger.error(`Database connection failed with error ${error.stack}`);
		process.exit(1);
	}
};
module.exports = dbConnect;
