<script>
	import '../app.css';

	import { browser } from '$app/environment';
	import '$lib/i18n';
	import { locale, waitLocale } from 'svelte-i18n';

	// as soon as the browser is initialized, set locale to user's default browser language
	export const load = async () => {
		let userBrowserLanguage = window.navigator.language;
		if (browser) {
			locale.set(userBrowserLanguage);
		}
		await waitLocale();
	};
</script>

<slot />
