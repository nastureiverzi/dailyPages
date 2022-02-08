const express = require('express');
const cors = require('cors');

const app = express();

const config = require('./config/config');
const logger = require('./logger');
const httpLogger = require('./httpLogger');
const userRoutes = require('./routes/users');
const DBConnect = require('./config/database');

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
