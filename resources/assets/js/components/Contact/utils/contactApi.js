import { mapApiPaths, formApiPaths } from '../constants/apiPaths';
import getApiInstance from './getApiInstance';

const {
  basePath,
  usernamePath,
  styleIdPath,
  tilesPath,
  accessTokenParam,
  accessToken,
} = mapApiPaths;
const { mailPath } = formApiPaths;

const contactApi = {
  getTileLayerUrl: () =>
    `${basePath}${usernamePath}${styleIdPath}${tilesPath}?${accessTokenParam}${accessToken}`,
  sendMail: data => getApiInstance(mailPath, 'POST', data),
};

export default contactApi;
