import { ACTION_UPDATE_CONTACT } from '../constants/actionTypes';

const initialState = {
  username: '',
  email: '',
  subject: '',
  body: ''
};

function contactReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_UPDATE_CONTACT : {
      let newState = { ...state };
      newState[action.fieldName] = action.value;
      return newState;
    }
    default:
      return state;
  }
}

export default contactReducer;
