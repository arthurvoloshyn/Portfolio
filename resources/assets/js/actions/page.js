import { ACTION_RELOAD_PAGE, ACTION_SET_PAGE } from '../constants/actionTypes';

export const setPage = name => ({
  type: ACTION_SET_PAGE,
  page: name
});

export const reloadPage = statusReload => ({
  type: ACTION_RELOAD_PAGE,
  statusReload
});
