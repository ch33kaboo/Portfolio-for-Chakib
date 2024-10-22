import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';
import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./lang/en.json'));
register('fr', () => import('./lang/fr.json'));
register('de', () => import('./lang/de.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');
