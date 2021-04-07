// Library imports
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// File imports
import { rootReducer } from './rootReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
