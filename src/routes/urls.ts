import { Url } from './routes.types';

// User related urls
export const userUrls: Url = Object.freeze({
	ENTER_INFO: () => '/',
});

// Admin related urls
export const adminUrls: Url = Object.freeze({
	VIEW_USER_INFO: () => '/admin/view-user-info',
});

// Merge all URLS
export const urls: Url = Object.freeze({
	...userUrls,
	...adminUrls,
});