export type InfoForm = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	incomeType: IncomeType;
};

export type IncomeType = 'jobHolder' | 'business' | 'retired' | 'unemployed' | '';
