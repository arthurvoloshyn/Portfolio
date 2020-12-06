import { mapApiPaths, formApiPaths } from '../../../constants/apiPaths';
import GetApiInstance from '../../../services/GetApiInstance';

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
  sendMail: data => GetApiInstance(mailPath, 'POST', data),
};

export default contactApi;
