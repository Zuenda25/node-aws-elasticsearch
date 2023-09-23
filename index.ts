import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import ENV_CONFIG from './app/configs/env.config';
import api from './app/routers/index';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/api', api);

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Ohh you are lost, read the API documentation to find your way back home :)',
    data: null,
  })
})

app.listen(ENV_CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV_CONFIG.app.port}`);
});

module.exports = app;