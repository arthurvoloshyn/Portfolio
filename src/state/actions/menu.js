import ACTION_TYPES from '../../constants/actionTypes';

export const toggleStatus = status => ({
  type: ACTION_TYPES.TOGGLE_MENU_STATUS,
  status,
});

export const setStatusMenu = status => ({
  type: ACTION_TYPES.SET_MENU_STATUS,
  status,
});
