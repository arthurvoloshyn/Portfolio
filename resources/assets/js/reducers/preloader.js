import { ACTION_SET_PRELOADER_STATUS } from '../constants/actionTypes';

const initialState = {
  preloader: false
};

const preloaderReducer = (state = initialState, { type, preloader }) => {
  switch (type) {
    case ACTION_SET_PRELOADER_STATUS:
      return { preloader };
    default:
      return state;
  }
};

export default preloaderReducer;
