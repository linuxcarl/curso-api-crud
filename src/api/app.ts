import { Server } from './server';
import loadContainer from './container';
import { loadControllers } from 'awilix-express';

const app = new Server().getApp();

loadContainer(app);
app.use(loadControllers('modules/**/*.controller.ts', { cwd: __dirname }));

export { app };
