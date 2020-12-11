import { createStore, compose } from 'redux';

import environment from '../constants/environment';
import reducers from '../reducers';

const composeEnhancers =
  !environment.isProd && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = preloadedState => createStore(reducers, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
