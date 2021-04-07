// Library imports
import { Dispatch } from 'react';
import { DispatchType } from 'store/store.types';

// File imports
import { USER_INFO } from './actionTypes';
import { RegisterUserInfoPayload } from './types';

//Register User Info
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUserInfo = (payload: RegisterUserInfoPayload) => (dispatch: Dispatch<DispatchType>): void => {
	dispatch({
		type: USER_INFO.ADD,
		payload,
	});
};
