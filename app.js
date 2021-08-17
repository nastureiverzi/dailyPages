require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');
const logger = require('./logger');
const httpLogger = require('./httpLogger');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(httpLogger);

app.get('/boom', (req, res, next) => {
    try {
        throw new Error('Wowza!');
    } catch (error) {
        logger.error('Whooops! This broke with error: ', error);
        res.status(500).send('Error!');
    }
});

app.listen(process.env.HTTP_PORT, () => logger.info(`Express.js listening on port ${process.env.HTTP_PORT}.`));
