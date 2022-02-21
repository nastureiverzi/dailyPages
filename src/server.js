const app = require('./app');
const config = require('../config/config');
const logger = require('../logger');

const DBConnect = require('../config/database');

DBConnect();

const { port } = config.app;
app.listen(port, () => logger.info(`Express.js listening on port ${port}.`));
