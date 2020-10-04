import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { Config } from '../config/index';
export class Server {
  #port = Number(Config.api().port);
  #app!: express.Application;

  public constructor() {
    this.createApp();
    this.configApp();
    this.runServer();
  }
  public getApp(): express.Application {
    return this.#app;
  }
  private createApp(): void {
    this.#app = express();
  }
  private configApp(): void {
    this.#app.use(express.json());
    this.#app.use(cors());
    this.#app.use(helmet());
  }
  private runServer(): void {
    this.#app.listen(this.#port, () => console.log('Server running in the port: %s', this.#port));
  }
}
