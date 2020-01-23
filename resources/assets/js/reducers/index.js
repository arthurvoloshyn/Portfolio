import { combineReducers } from 'redux';

import contactReducer from './contact';
import menuReducer from './menu';
import pageReducer from './page';
import preloaderReducer from './preloader';

const reducers = combineReducers({
  contact: contactReducer,
  menu: menuReducer,
  page: pageReducer,
  preloader: preloaderReducer
});

export default reducers;
