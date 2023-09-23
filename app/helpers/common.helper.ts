export type Environment = {
  app: {
    host: string;
    port: string;
  },
  es: {
    host: string;
    apiKey: string;
  }
};

export type HttpResponse = {
  success: boolean;
  message: string;
  data: string | object | Array<string> | Array<object> | null;
};