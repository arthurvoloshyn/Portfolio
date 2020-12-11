const { NODE_ENV } = process.env;

const environment = {
  isProd: NODE_ENV === 'production',
  isDev: NODE_ENV === 'development',
};

export default environment;
