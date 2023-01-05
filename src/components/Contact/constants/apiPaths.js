import ENV from '../../../constants/env';

const { mapStyleId, mapUsername, mapAccessToken } = ENV;

export const mapApiPaths = {
  basePath: 'https://api.mapbox.com/styles/v1',
  usernamePath: `/${mapUsername}`,
  styleIdPath: `/${mapStyleId}`,
  tilesPath: '/tiles/256/{z}/{x}/{y}@2x',
  accessTokenParam: 'access_token=',
  accessToken: mapAccessToken,
};

export const formApiPaths = {
  emailPath: '/mail',
};
