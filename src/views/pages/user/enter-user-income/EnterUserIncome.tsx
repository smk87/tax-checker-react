// Library imports
import React, { FormEvent, useEffect } from 'react';

// File imports
import { combineClasses, history } from 'utils';
import { IncomeType } from '../enter-user-info/EnterUserInfo.types';
import { useStyles } from './EnterUserIncome.styles';
import { urls } from 'routes/urls';
import { useFormFields } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store.types';
import { registerUserIncomeInfo } from 'store/user';

export const EnterUserIncome: React.FC = () => {
	const { form, pageWrapper, submitButton } = useStyles();
	const [fields, handleForm] = useFormFields({
		monthlyIncome: 0,
	});
	const { incomeType } = useSelector((state: RootState) => state.user.infoState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!incomeType) {
			history.replace(urls.ENTER_INFO());
		}
	}, [incomeType]);

	const getLabel = (incomeType: IncomeType): string => {
		switch (incomeType) {
			case 'Job Holder':
				return 'Monthly Basic Income';

			case 'Business':
				return 'Monthly Revenue';

			case 'Retired':
				return 'Monthly Pension';

			default:
				return 'Monthly Income';
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		// Dispatch register Income Info Action
		dispatch(registerUserIncomeInfo(fields));

		history.push(urls.SHOW_TAX());
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
						{getLabel(incomeType as IncomeType)} (USD)
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
