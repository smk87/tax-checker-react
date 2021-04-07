import { InfoForm } from 'views/pages/user/enter-user-info/EnterUserInfo.types';

export type RegisterUserInfoPayload = InfoForm & { monthlyIncome: string };
