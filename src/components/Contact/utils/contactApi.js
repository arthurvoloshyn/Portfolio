import { formApiPaths, mapApiPaths } from '../constants/apiPaths';
import getApiInstance from './getApiInstance';

const {
  basePath,
  usernamePath,
  styleIdPath,
  tilesPath,
  accessTokenParam,
  accessToken,
} = mapApiPaths;
const { emailPath } = formApiPaths;

const contactApi = {
  getTileLayerUrl: () =>
    `${basePath}${usernamePath}${styleIdPath}${tilesPath}?${accessTokenParam}${accessToken}`,
  sendEmail: data => getApiInstance(emailPath, 'POST', data),
};

export default contactApi;
