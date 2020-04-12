import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default (initialState, options) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
