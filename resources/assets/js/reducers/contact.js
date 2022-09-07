import ACTION_TYPES from '../constants/actionTypes';

const initialState = {
  username: '',
  email: '',
  subject: '',
  body: '',
};

const contactReducer = (state = initialState, { type, fieldName, value }) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_CONTACT:
      return { ...state, [fieldName]: value };
    default:
      return state;
  }
};

export default contactReducer;
