import { ReactElement } from 'react';

export type Col = {
	id: number | string;
	label: string;
};

export type Row = {
	[key: string]: string | number | ReactElement;
};

export type TableProps = {
	columns: Col[];
	rows: Row[];
	className?: string;
};
