// Library imports
import { incomeTypes } from 'configs';
import React, { FormEvent } from 'react';

// File imports
import { combineClasses, history } from 'utils';
import { useStyles } from './EnterUserInfo.styles';
import { InfoForm } from './EnterUserInfo.types';
import { urls } from 'routes/urls';
import { useFormFields } from 'hooks';
import { registerUserInfo } from 'store/user';
import { useDispatch } from 'react-redux';

export const EnterUserInfo: React.FC = () => {
	const { form, pageWrapper, submitButton } = useStyles();
	const [fields, handleForm] = useFormFields<InfoForm>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		incomeType: '',
	});
	const dispatch = useDispatch();

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		// Dispatch action to register info
		dispatch(registerUserInfo(fields));

		if (fields.incomeType !== 'unemployed') {
			history.push(urls.ENTER_INCOME());
		} else {
			history.push(urls.SHOW_TAX());
		}
	};

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'>
				<h1 className='mb-4 text-primary font-weight-bold'>Enter Your Basic Information</h1>
			</div>
			<form onSubmit={handleSubmit} className={combineClasses('row', form)}>
				{/* First Name */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='firstName' className='form-label'>
						First name
					</label>
					<input
						onChange={handleForm}
						value={fields.firstName}
						type='text'
						className='form-control'
						name='firstName'
						id='firstName'
					/>
				</div>
				{/* Last Name */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='lastName' className='form-label'>
						Last name
					</label>
					<input
						onChange={handleForm}
						value={fields.lastName}
						type='text'
						className='form-control'
						name='lastName'
						id='lastName'
					/>
				</div>
				{/* Email */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						onChange={handleForm}
						value={fields.email}
						type='email'
						className='form-control'
						name='email'
						id='email'
					/>
				</div>
				{/* Phone */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='phone' className='form-label'>
						Phone No
					</label>
					<input
						onChange={handleForm}
						value={fields.phone}
						type='tel'
						className='form-control'
						name='phone'
						id='phone'
					/>
				</div>
				{/* Address */}
				<div className='col-12 mb-3 form-group'>
					<label htmlFor='address' className='form-label'>
						Address
					</label>
					<input
						onChange={handleForm}
						value={fields.address}
						type='text'
						className='form-control'
						name='address'
						id='address'
					/>
				</div>
				{/* Income Type */}
				<div className='col-12 form-group'>
					<label htmlFor='incomeType'>Income Type</label>
					<select
						onChange={handleForm}
						value={fields.incomeType}
						className='form-control'
						name='incomeType'
						id='incomeType'
					>
						<option value=''>Select</option>
						{incomeTypes.map((type) => (
							<option key={type.id} value={type.value}>
								{type.label}
							</option>
						))}
					</select>
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
