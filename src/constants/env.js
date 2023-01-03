const { NODE_ENV, REACT_APP_FULL_PAGE_LICENSE_KEY: FULL_PAGE_LICENSE_KEY } = process.env;

const ENV = {
  isProd: NODE_ENV === 'production',
  isDev: NODE_ENV === 'development',
  fullPageLicenseKey: FULL_PAGE_LICENSE_KEY,
};

export default ENV;
