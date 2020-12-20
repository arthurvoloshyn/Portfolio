import { createStore, compose } from 'redux';

import ENV from '../constants/env';
import reducers from '../reducers';

const composeEnhancers =
  !ENV.isProd && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = preloadedState => createStore(reducers, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
