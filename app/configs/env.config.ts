import dotenv from 'dotenv';

dotenv.config();

import { Environment } from '../types/common.type';
import { ObjectMap } from '../interfaces/common.interface';

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

const ENV_CONFIG: ObjectMap = {
  development: development,
  test: test
}

export default ENV_CONFIG[env];
