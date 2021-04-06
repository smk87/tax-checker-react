// Library imports
import React from 'react';

// File imports
import { combineClasses } from 'utils';
import { useStyles } from './ShowTax.styles';

export const ShowTax: React.FC = () => {
	const { messageWrapper, pageWrapper } = useStyles();

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'></div>
			<div className={combineClasses('row', messageWrapper)}>
				{/* Monthly Income */}
				<h1 className='mb-4  font-weight-bold'>Your Yearly Income is: 100000</h1>
				<h3 className='text-align-center text-danger'>You are eligible for Tax.</h3>
			</div>
		</div>
	);
};
