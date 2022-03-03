import db from './config/database';
import logger from './logger';
import Bootstrap from './src/bootstrap';

// start server
const bootstrap = new Bootstrap();
bootstrap.run((port) =>
	logger.info(`Server started an running on port ${port}.`)
);

// start db
db.connect();
