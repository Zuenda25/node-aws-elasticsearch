import { Client } from '@elastic/elasticsearch';
import { readFileSync } from 'fs';
import ENV_CONFIG from './env.config';

const EsClient = new Client({
  node: ENV_CONFIG.es.host,
  auth: {
    apiKey: ENV_CONFIG.es.apiKey
  },
  tls: {
    ca: readFileSync('./http_ca.crt'),
    rejectUnauthorized: true
  }
});

export default EsClient;