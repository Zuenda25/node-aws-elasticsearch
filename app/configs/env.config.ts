import dotenv from 'dotenv';

dotenv.config();

import { Environment } from '../types/common.type';

const env: string = process.env.NODE_ENV!;

const development: Environment = {
  app: {
    host: process.env.DEVELOPMENT_APP_HOST!,
    port: process.env.DEVELOPMENT_APP_PORT!,
  },
}

const test: Environment = {
  app: {
    host: process.env.TEST_APP_HOST!,
    port: process.env.TEST_APP_PORT!,
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ENV_CONFIG: any = {
  development: development,
  test: test
}

export default ENV_CONFIG[env];
