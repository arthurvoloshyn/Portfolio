import { createStore, compose } from 'redux';

import reducers from '../reducers';

const { NODE_ENV } = process.env;

const composeEnhancers =
  NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = preloadedState => createStore(reducers, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
