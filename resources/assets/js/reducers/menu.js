import { ACTION_SET_MENU_STATUS, ACTION_TOGGLE_MENU_STATUS } from '../constants/actionTypes';

const initialState = {
  status: false
};

function menuReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_MENU_STATUS : {
      return { status: action.status };
    }
    case ACTION_TOGGLE_MENU_STATUS : {
      return { status: !action.status };
    }
    default:
      return state;
  }
}

export default menuReducer;
