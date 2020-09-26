import { ACTION_SET_PRELOADER_STATUS } from '../constants/actionTypes';

export const setStatus = preloader => ({
  type: ACTION_SET_PRELOADER_STATUS,
  preloader,
});
