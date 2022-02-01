const express = require('express');

const app = express();

const mongoose = require('mongoose');
const config = require('./config/config');
const logger = require('./logger');
const httpLogger = require('./httpLogger');
const userRoutes = require('./routes/user');

const connString = `mongodb://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
    console.log(err);
});

//
app.use(httpLogger);

// app.get('/boom', (req, res, next) => {
//     try {
//         throw new Error('Wowza!');
//     } catch (error) {
//         logger.error('Whooops! This broke with error: ', error);
//         res.status(500).send('Error!');
//     }
// });

app.use('/user', userRoutes);

app.listen(() => logger.info(`Express.js listening on port ${config.app.port}.`));
