import getApiInstance from '../utils/getApiInstance';
import { mapApiPaths, formApiPaths } from '../constants/apiPaths';

const {
  basePath,
  usernamePath,
  styleIdPath,
  tilesPath,
  accessTokenParam,
  accessToken,
} = mapApiPaths;
const { mailPath } = formApiPaths;

const Api = {
  getTileLayerUrl: () =>
    `${basePath}${usernamePath}${styleIdPath}${tilesPath}?${accessTokenParam}${accessToken}`,
  sendMail: data => getApiInstance(mailPath, 'POST', data),
};

export default Api;
