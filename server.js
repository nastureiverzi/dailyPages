const express = require('express');
const cors = require('cors');
const DBConnect = require('./config/database');
const config = require('./config/config');
const httpLogger = require('./httpLogger');
const logger = require('./logger');

const app = express();

const userRoutes = require('./src/modules/users/routes/userRoutes');

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
