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
const ShowTax = lazy(() => import('views/pages').then(({ ShowTax }) => ({ default: ShowTax })));

/**
 * ==========================================
 * User components
 * ==========================================
 */
const ShowUsers = lazy(() => import('views/pages').then(({ ShowUsers }) => ({ default: ShowUsers })));

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
	ENTER_INCOME_PAGE: {
		path: urls.ENTER_INCOME(),
		component: EnterUserIncome,
	},
	SHOW_TAX_PAGE: {
		path: urls.SHOW_TAX(),
		component: ShowTax,
	},
	/**
	 * ==========================================
	 * Admin routes
	 * ==========================================
	 */
	SHOW_USER_PAGE: {
		path: urls.SHOW_USER(),
		component: ShowUsers,
	},
});
