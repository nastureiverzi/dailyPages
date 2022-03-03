import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/routes/userRoutes';
import httpLogger from '../httpLogger';

export default class App {
	constructor(config) {
		this.appConfig = config;
	}

	start(callback) {
		const app = this.setup();
		const { port } = this.appConfig.app;

		app.listen(port, callback(port));
	}

	setup() {
		const app = express();

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

		app.use('/users', userRoutes);

		return app;
	}
}
