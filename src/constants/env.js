const {
  NODE_ENV,
  REACT_APP_FULL_PAGE_LICENSE_KEY,
  REACT_APP_MAP_ACCESS_TOKEN,
  REACT_APP_MAP_STYLE_ID,
  REACT_APP_MAP_USERNAME,
} = process.env;

const ENV = {
  isProd: NODE_ENV === 'production',
  isDev: NODE_ENV === 'development',
  fullPageLicenseKey: REACT_APP_FULL_PAGE_LICENSE_KEY,
  mapAccessToken: REACT_APP_MAP_ACCESS_TOKEN,
  mapStyleId: REACT_APP_MAP_STYLE_ID,
  mapUsername: REACT_APP_MAP_USERNAME,
};

export default ENV;
