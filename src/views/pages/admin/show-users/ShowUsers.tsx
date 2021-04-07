// Library imports
import React, { useEffect, useState } from 'react';

// File imports
import { combineClasses, history } from 'utils';
import { useStyles } from './ShowUsers.styles';
import { urls } from 'routes/urls';
import { Table } from 'views/components';
import { Col, Row } from 'views/components/table/Table.types';
import { envs } from 'configs/envs';
import { localStorageKeys } from 'constant';

export const ShowUsers: React.FC = () => {
	const { tableWrapper, pageWrapper } = useStyles();
	const [rows, setRows] = useState<Row[]>([]);
	const [prompt, setPrompt] = useState<string | null>('');

	const cols: Col[] = [
		{ id: 1, label: 'Name' },
		{ id: 2, label: 'Email' },
		{ id: 3, label: 'Income Type' },
		{ id: 4, label: 'Monthly Income' },
	];

	useEffect(() => {
		// Get password from incoming visitor
		const newPrompt = window.prompt('Say the magic word!');

		setPrompt(newPrompt);

		if (newPrompt !== envs.ADMIN_PASSWORD) {
			history.replace(urls.ENTER_INFO());
		}

		// Get from localStorage
		const existingUsers = localStorage.getItem(localStorageKeys.USER_STORE_KEY);

		if (existingUsers) {
			const users = JSON.parse(existingUsers);

			const newRows: Row[] = [];

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			users.forEach((user: Row) => {
				newRows.push({
					name: `${user?.firstName} ${user?.lastName}`,
					email: user?.email,
					incomeTypes: user?.incomeType,
					monthlyIncome: user?.monthlyIncome || 0,
				});
			});

			setRows(newRows);
		}
	}, []);

	return (
		<div className={combineClasses('container', pageWrapper)}>
			{prompt === envs.ADMIN_PASSWORD && (
				<>
					<div className='row'>
						<h1 className='mb-4 text-primary font-weight-bold'>User List</h1>
					</div>
					<div className={combineClasses('row', tableWrapper)}>
						<Table columns={cols} rows={rows} />
					</div>
				</>
			)}
		</div>
	);
};
