import ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
  status: false,
};

const menuReducer = (state = initialState, { type, status }) => {
  switch (type) {
    case ACTION_TYPES.SET_MENU_STATUS:
      return { status };
    case ACTION_TYPES.TOGGLE_MENU_STATUS:
      return { status: !status };
    default:
      return state;
  }
};

export default menuReducer;
