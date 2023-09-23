import dotenv from 'dotenv';

dotenv.config();

import { Environment } from '../helpers/common.helper';


const env: string = process.env.NODE_ENV || 'development';

const development: Environment = {
  app: {
    host: process.env.DEVELOPMENT_APP_HOST!,
    port: process.env.DEVELOPMENT_APP_PORT!,
  },
  es: {
    host: process.env.DEVELOPMENT_ES_HOST!,
    apiKey: process.env.DEVELOPMENT_ES_API_KEY!,
  }
}

const test: Environment = {
  app: {
    host: process.env.TEST_APP_HOST!,
    port: process.env.TEST_APP_PORT!,
  },
  es: {
    host: process.env.TEST_ES_HOST!,
    apiKey: process.env.TEST_ES_API_KEY!,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ENV_CONFIG: any = {
  development: development,
  test: test
}

export default ENV_CONFIG[env];
