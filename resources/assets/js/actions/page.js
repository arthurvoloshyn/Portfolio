import { ACTION_RELOAD_PAGE, ACTION_SET_PAGE } from '../constants/actionTypes';

export const setPage = page => ({
  type: ACTION_SET_PAGE,
  page
});

export const reloadPage = statusReload => ({
  type: ACTION_RELOAD_PAGE,
  statusReload
});
