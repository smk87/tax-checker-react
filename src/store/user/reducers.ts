import { ActionReturnType } from 'store/store.types';
import { USER_INFO } from './actionTypes';

const initialState = () => ({
	infoState: {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		incomeType: '',
		monthlyIncome: '',
	},
});

export const userReducer = (state = initialState(), action: ActionReturnType): ReturnType<typeof initialState> => {
	switch (action.type) {
		case USER_INFO.ADD:
			return {
				...state,
				infoState: action.payload,
			};

		default:
			return state;
	}
};
