// Library imports
import { incomeTypes } from 'configs';
import { useFormFields } from 'hooks';
import React from 'react';

// File imports
import { combineClasses } from 'utils';
import { useStyles } from './EnterUserInfo.styles';

export const EnterUserInfo: React.FC = () => {
	const { form, pageWrapper, submitButton } = useStyles();
	const [fields, handleForm] = useFormFields({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		incomeType: '',
	});

	return (
		<div className={combineClasses('container', pageWrapper)}>
			<div className='row'>
				<h1 className='mb-4 text-primary'>Enter Your Basic Information</h1>
			</div>
			<form className={combineClasses('row', form)}>
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
