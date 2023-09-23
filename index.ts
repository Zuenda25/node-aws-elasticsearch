import express, { Express, Request, Response } from 'express';
import ENV_CONFIG from './app/configs/env.config';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(ENV_CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV_CONFIG.app.port}`);
});