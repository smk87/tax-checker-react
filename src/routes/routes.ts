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

/**
 * Routes
 */
export const routes: Route = Object.freeze({
	/**
	 * ==========================================
	 * User routes
	 * ==========================================
	 */
	VIEW_USER_INFO_PAGE: {
		path: urls.ENTER_INFO(),
		component: EnterUserInfo,
	},
});
