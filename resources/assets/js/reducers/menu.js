import { ACTION_SET_MENU_STATUS, ACTION_TOGGLE_MENU_STATUS } from '../constants/actionTypes';

const initialState = {
  status: false
};

const menuReducer = (state = initialState, { type, status }) => {
  switch (type) {
    case ACTION_SET_MENU_STATUS : {
      return { status };
    }
    case ACTION_TOGGLE_MENU_STATUS : {
      return { status: !status };
    }
    default:
      return state;
  }
};

export default menuReducer;
