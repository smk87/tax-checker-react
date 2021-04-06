// Library imports
import { useFormFields } from 'hooks';
import React, { FormEvent } from 'react';

// File imports
import { combineClasses } from 'utils';
import { IncomeType } from '../enter-user-info/EnterUserInfo.types';
import { useStyles } from './EnterUserIncome.styles';

export const EnterUserIncome: React.FC = () => {
	const { form, pageWrapper, submitButton } = useStyles();
	const [fields, handleForm] = useFormFields({
		monthlyIncome: '',
	});

	const getLabel = (incomeType: IncomeType): string => {
		switch (incomeType) {
			case 'jobHolder':
				return 'Monthly Basic Income';

			case 'business':
				return 'Monthly Revenue';

			case 'retired':
				return 'Monthly Pension';

			default:
				return '';
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'>
				<h1 className='mb-4 text-primary font-weight-bold'>Enter Your Monthly Income</h1>
			</div>
			<form onSubmit={handleSubmit} className={combineClasses('row', form)}>
				{/* Monthly Income */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='monthlyIncome' className='form-label'>
						{getLabel('jobHolder')}
					</label>
					<input
						onChange={handleForm}
						value={fields.monthlyIncome}
						type='number'
						className='form-control'
						name='monthlyIncome'
						id='monthlyIncome'
					/>
				</div>
				<div className='col-12 mt-4 d-flex justify-content-center'>
					<button type='submit' className={combineClasses('btn', 'btn-primary', 'mb-0', submitButton)}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
