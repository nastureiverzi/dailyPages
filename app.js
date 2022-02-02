const express = require('express');

const app = express();

const config = require('./config/config');
const logger = require('./logger');
const httpLogger = require('./httpLogger');
const userRoutes = require('./routes/user');
const DBConnect = require('./config/database');

app.use(httpLogger);

app.use('/user', userRoutes);

DBConnect();

app.listen(() =>
	logger.info(`Express.js listening on port ${config.app.port}.`)
);
