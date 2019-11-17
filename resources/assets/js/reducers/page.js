import { URLS } from './../constants/urls';
import { ACTION_RELOAD_PAGE, ACTION_SET_PAGE } from '../constants/actionTypes';

const path = window.location.href.split('/')[3].split('#');
let page = path[1] ? path[1] : path[0];

const initialState = {
  page: page || URLS.main,
  statusReload: false
};

function pageReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_PAGE : {
      return { ...state, page: action.page ? action.page : 'main' };
    }
    case ACTION_RELOAD_PAGE : {
      return { ...state, statusReload: action.statusReload };
    }
    default:
      return state;
  }
}

export default pageReducer;
