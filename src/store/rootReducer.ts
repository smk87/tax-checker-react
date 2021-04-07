// Library imports
import { combineReducers } from 'redux';

// File imports
import { userReducer } from './user';

export const rootReducer = combineReducers({
	/**
	 * Reducers here
	 */
	user: userReducer,
});
