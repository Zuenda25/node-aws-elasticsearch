import { Client } from '@elastic/elasticsearch';
import ENV_CONFIG from './env.config';

const client = new Client({
  node: ENV_CONFIG.es.host,
  auth: {
    apiKey: ENV_CONFIG.es.apiKey
  }
});

export default client;