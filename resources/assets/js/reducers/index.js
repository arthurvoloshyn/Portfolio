import { combineReducers } from 'redux';

import contact from './contact';
import menu from './menu';
import page from './page';
import preloader from './preloader';

const reducers = combineReducers({
  contact,
  menu,
  page,
  preloader,
});

export default reducers;
