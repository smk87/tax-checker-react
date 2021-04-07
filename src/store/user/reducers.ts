import { ActionReturnType } from 'store/store.types';
import { USER_INCOME_INFO, USER_INFO } from './actionTypes';

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
	const payload = action.payload;

	switch (action.type) {
		case USER_INFO.ADD:
		case USER_INCOME_INFO.ADD:
			return {
				...state,
				infoState: { ...state.infoState, ...payload },
			};

		default:
			return state;
	}
};
