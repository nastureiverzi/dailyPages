import express from 'express';
import cors from 'cors';
import awilix from 'awilix-express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import httpLogger from '../../httpLogger.js';

export default class App {
	constructor({ config }) {
		this.appConfig = config;
	}

	start(callback) {
		const app = this.setup();
		const { port } = this.appConfig.app;

		app.listen(port, callback(port));
	}

	setup() {
		const app = express();
		const filename = fileURLToPath(import.meta.url);
		const currDir = dirname(filename);

		app.use(
			cors({
				origin: `${this.appConfig.app.origin}`,
			})
		);
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(httpLogger);

		app.get('/', (req, res) => {
			res.json({ message: 'Da...tu inca existi?' });
		});

		return app;
	}
}
