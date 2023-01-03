import ACTION_TYPES from '../../constants/actionTypes';

const setStatus = preloader => ({
  type: ACTION_TYPES.SET_PRELOADER_STATUS,
  preloader,
});

export default setStatus;
