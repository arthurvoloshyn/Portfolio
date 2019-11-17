import { ACTION_SET_PRELOADER_STATUS } from '../constants/actionTypes';

const initialState = {
  preloader: false
};

function preloaderReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_PRELOADER_STATUS : {
      return { preloader: action.preloader };
    }
    default:
      return state;
  }
}

export default preloaderReducer;
