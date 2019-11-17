import { ACTION_SET_MENU_STATUS, ACTION_TOGGLE_MENU_STATUS } from '../constants/actionTypes';

export const toggleStatus = status => ({
  type: ACTION_TOGGLE_MENU_STATUS,
  status
});

export const setStatusMenu = status => ({
  type: ACTION_SET_MENU_STATUS,
  status
});
