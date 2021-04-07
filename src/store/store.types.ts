import { rootReducer } from './rootReducer';

export type DispatchType = {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
};

export type RootState = ReturnType<typeof rootReducer>;

/**
 * type: an action type
 * payload: the payload
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionReturnType<T = any> = {
	type: string;
	payload?: T;
};
