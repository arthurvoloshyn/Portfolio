import URLS from '../constants/urls';
import ACTION_TYPES from '../constants/actionTypes';

const { href } = window.location;
const pathName = href.split('/')[3];
const path = pathName.split('#');
const page = path[1] || path[0];

const initialState = {
  page: page || URLS.main,
  statusReload: false,
};

const pageReducer = (state = initialState, { type, page, statusReload }) => {
  switch (type) {
    case ACTION_TYPES.SET_PAGE:
      return { ...state, page: page || 'main' };
    case ACTION_TYPES.RELOAD_PAGE:
      return { ...state, statusReload };
    default:
      return state;
  }
};

export default pageReducer;
