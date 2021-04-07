// Library imports
import { Dispatch } from 'react';

// File imports
import { USER_INCOME_INFO, USER_INFO } from './actionTypes';
import { RegisterUserIncomeInfoPayload, RegisterUserInfoPayload } from './types';
import { DispatchType } from 'store/store.types';

// Register User Info
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUserInfo = (payload: RegisterUserInfoPayload) => (
	dispatch: Dispatch<DispatchType<RegisterUserInfoPayload>>
): void => {
	console.log(payload);
	dispatch({
		type: USER_INFO.ADD,
		payload,
	});
};

// Register User Income Info
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUserIncomeInfo = (payload: RegisterUserIncomeInfoPayload) => (
	dispatch: Dispatch<DispatchType<RegisterUserIncomeInfoPayload>>
): void => {
	dispatch({
		type: USER_INCOME_INFO.ADD,
		payload,
	});
};
