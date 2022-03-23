const express = require('express');
const cors = require('cors');

const app = express();

const config = require('../config/config');
const logger = require('../logger');
const httpLogger = require('../httpLogger');
const userRoutes = require('./modules/users/routes/userRoutes');
const DBConnect = require('../db/database');

app.use(
	cors({
		origin: `${config.app.origin}`,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httpLogger);
app.get('/', (req, res) => {
	res.json({ message: 'Da...tu inca existi?' });
});

app.use('/users', userRoutes);

DBConnect();

const { port } = config.app;
app.listen(port, () => logger.info(`Express.js listening on port ${port}.`));
