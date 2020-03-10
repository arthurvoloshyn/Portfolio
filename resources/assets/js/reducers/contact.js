import { ACTION_UPDATE_CONTACT } from '../constants/actionTypes';

const initialState = {
  username: '',
  email: '',
  subject: '',
  body: ''
};

const contactReducer = (state = initialState, { type, fieldName, value }) => {
  switch (type) {
    case ACTION_UPDATE_CONTACT: {
      return {
        ...state,
        [fieldName]: value
      };
    }
    default: {
      return state;
    }
  }
};

export default contactReducer;
