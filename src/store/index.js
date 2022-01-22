import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import composeEnhancers from './core/composeEnhancers';

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;