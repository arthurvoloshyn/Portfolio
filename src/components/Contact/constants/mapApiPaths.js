import ENV from '../../../constants/env';

const { mapStyleId, mapUsername, mapAccessToken } = ENV;

const basePath = 'https://api.mapbox.com/styles/v1';
const usernamePath = `/${mapUsername}`;
const styleIdPath = `/${mapStyleId}`;
const tilesPath = '/tiles/256/{z}/{x}/{y}@2x';
const accessTokenParam = 'access_token=';

// eslint-disable-next-line max-len
const mapTileLayerUrl = `${basePath}${usernamePath}${styleIdPath}${tilesPath}?${accessTokenParam}${mapAccessToken}`;

export default mapTileLayerUrl;
