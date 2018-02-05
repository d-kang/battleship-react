import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

export default function configureStore(initialState) {
  const middlewares = [
    thunk,
    logger,
  ];
  const enhancer = applyMiddleware(...middlewares);
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}
