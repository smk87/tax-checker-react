// Library imports
import React from 'react';

// File imports
import { combineClasses } from 'utils';
import { TableProps } from './Table.types';

export const Table: React.FC<TableProps> = ({ className, columns, rows }: TableProps) => {
	return (
		<table className={combineClasses('table', 'table-striped', className || '')}>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.id} scope='col'>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						{Object.keys(row).map((item, index) => (
							<td key={index}>{row[item]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
