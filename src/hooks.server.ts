import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

// this server hook detects user's browser language and set it as a locale
// i18n would work on browser without this as well, but it would not work for SSR
export const detectAndSetBrowserLanguage: Handle = async ({ event, resolve }) => {
	const browserLanguage = event.request.headers.get('accept-language')?.split(',')[0];
	if (browserLanguage) {
		locale.set(browserLanguage);
	}
	return resolve(event);
};
