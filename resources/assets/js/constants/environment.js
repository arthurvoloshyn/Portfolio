const { NODE_ENV, FULL_PAGE_LICENSE_KEY } = process.env;

const environment = {
  isProd: NODE_ENV === 'production',
  isDev: NODE_ENV === 'development',
  fullPageLicenseKey: FULL_PAGE_LICENSE_KEY,
};

export default environment;
