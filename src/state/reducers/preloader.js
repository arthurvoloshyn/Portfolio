import ACTION_TYPES from '../actionTypes';

const initialState = {
  preloader: false,
};

const preloaderReducer = (state = initialState, { type, preloader }) => {
  switch (type) {
    case ACTION_TYPES.SET_PRELOADER_STATUS:
      return { preloader };
    default:
      return state;
  }
};

export default preloaderReducer;
