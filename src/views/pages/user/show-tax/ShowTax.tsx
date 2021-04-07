// Library imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// File imports
import { combineClasses, history } from 'utils';
import { useStyles } from './ShowTax.styles';
import { RootState } from 'store/store.types';
import { urls } from 'routes/urls';
import { localStorageKeys } from 'constant';

export const ShowTax: React.FC = () => {
	const { messageWrapper, pageWrapper } = useStyles();
	const userInfo = useSelector((state: RootState) => state.user.infoState);

	const yearlyIncome = Number(userInfo.monthlyIncome) * 12;

	useEffect(() => {
		// Save to localStorage
		const existingUsers = localStorage.getItem(localStorageKeys.USER_STORE_KEY);

		if (existingUsers && userInfo.incomeType) {
			const updatedUsers = [...JSON.parse(existingUsers)];

			updatedUsers.push(userInfo);
			localStorage.setItem(localStorageKeys.USER_STORE_KEY, JSON.stringify(updatedUsers));
		} else if (userInfo.incomeType) {
			localStorage.setItem(localStorageKeys.USER_STORE_KEY, JSON.stringify([userInfo]));
		}
	}, []);

	useEffect(() => {
		if (!userInfo.incomeType) {
			history.replace(urls.ENTER_INFO());
		}
	}, [userInfo.incomeType]);

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'></div>
			<div className={combineClasses('row', messageWrapper)}>
				{/* Monthly Income */}
				<h1 className='mb-4  font-weight-bold'>Your Yearly Income is: ${yearlyIncome}</h1>
				{yearlyIncome > 30000 ? (
					<h3 className='text-align-center text-danger'>You are eligible for Tax.</h3>
				) : (
					<h3 className='text-align-center text-success'>You are not eligible for Tax.</h3>
				)}
			</div>
		</div>
	);
};
