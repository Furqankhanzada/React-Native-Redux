import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
  );

  if(module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}