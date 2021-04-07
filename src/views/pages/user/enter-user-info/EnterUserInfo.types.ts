export type InfoForm = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	incomeType: IncomeType;
};

export type IncomeType = 'Job Holder' | 'Business' | 'Retired' | 'Unemployed' | '';
