import db from './config/database.js';
import logger from './logger.js';
import Bootstrap from './src/bootstrap.js';

// start server
const bootstrap = new Bootstrap();
bootstrap.run((port) =>
	logger.info(`Server started an running on port ${port}.`)
);

// start db
db.connect();
