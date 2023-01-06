import URLS from '../../constants/urls';
import ACTION_TYPES from '../actionTypes';
import getPath from '../../utils/getPath';

const path = getPath();
const page = path[1] || path[0];

const initialState = {
  page: page || URLS.main,
  statusReload: false,
};

const pageReducer = (state = initialState, { type, page, statusReload }) => {
  switch (type) {
    case ACTION_TYPES.SET_PAGE:
      return { ...state, page: page || URLS.main };
    case ACTION_TYPES.RELOAD_PAGE:
      return { ...state, statusReload };
    default:
      return state;
  }
};

export default pageReducer;
