import ACTION_TYPES from '../actionTypes';

export const setPage = page => ({
  type: ACTION_TYPES.SET_PAGE,
  page,
});

export const reloadPage = statusReload => ({
  type: ACTION_TYPES.RELOAD_PAGE,
  statusReload,
});
