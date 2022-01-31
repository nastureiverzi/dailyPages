require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');
const logger = require('./logger');
const httpLogger = require('./httpLogger');
const userRoutes = require('./routes/user');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(httpLogger);
app.use(express.json());
const port = process.env.PORT || 5000;

// app.get('/boom', (req, res, next) => {
//     try {
//         throw new Error('Wowza!');
//     } catch (error) {
//         logger.error('Whooops! This broke with error: ', error);
//         res.status(500).send('Error!');
//     }
// });

app.use('/user', userRoutes);

app.listen(port, () => logger.info(`Express.js listening on port ${port}.`));
