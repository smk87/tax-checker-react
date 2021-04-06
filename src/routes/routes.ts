// Library import
import { lazy } from 'react';

// File import
import { Route } from './routes.types';
import { urls } from './urls';

/**
 * ==========================================
 * User components
 * ==========================================
 */
const EnterUserInfo = lazy(() => import('views/pages').then(({ EnterUserInfo }) => ({ default: EnterUserInfo })));
const EnterUserIncome = lazy(() => import('views/pages').then(({ EnterUserIncome }) => ({ default: EnterUserIncome })));

/**
 * Routes
 */
export const routes: Route = Object.freeze({
	/**
	 * ==========================================
	 * User routes
	 * ==========================================
	 */
	ENTER_INFO_PAGE: {
		path: urls.ENTER_INFO(),
		component: EnterUserInfo,
	},
	ENTER_INCOME: {
		path: urls.ENTER_INCOME(),
		component: EnterUserIncome,
	},
});
