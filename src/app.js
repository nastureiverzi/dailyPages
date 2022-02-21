const express = require('express');
const cors = require('cors');

const app = express();

const config = require('../config/config');
const httpLogger = require('../httpLogger');
const userRoutes = require('./users/routes/userRoutes');

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

module.exports = app;
