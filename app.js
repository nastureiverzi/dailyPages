require('dotenv').config();

const express = require('express');

const app = express();
const logger = require('./logger');
const httpLogger = require('./httpLogger');

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
