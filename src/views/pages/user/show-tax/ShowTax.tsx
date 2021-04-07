// Library imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// File imports
import { combineClasses, history } from 'utils';
import { useStyles } from './ShowTax.styles';
import { RootState } from 'store/store.types';
import { urls } from 'routes/urls';

export const ShowTax: React.FC = () => {
	const { messageWrapper, pageWrapper } = useStyles();
	const { monthlyIncome } = useSelector((state: RootState) => state.user.infoState);

	const yearlyIncome = Number(monthlyIncome) * 12;

	useEffect(() => {
		if (!yearlyIncome) {
			history.replace(urls.ENTER_INFO());
		}
	}, [monthlyIncome]);

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'></div>
			<div className={combineClasses('row', messageWrapper)}>
				{/* Monthly Income */}
				<h1 className='mb-4  font-weight-bold'>Your Yearly Income is: {yearlyIncome}</h1>
				{yearlyIncome > 30000 ? (
					<h3 className='text-align-center text-danger'>You are eligible for Tax.</h3>
				) : (
					<h3 className='text-align-center text-success'>You are not eligible for Tax.</h3>
				)}
			</div>
		</div>
	);
};
