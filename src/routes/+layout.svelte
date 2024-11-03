<script>
	import '../app.css';

	import { browser } from '$app/environment';
	import '$lib/i18n';
	import { locale, waitLocale } from 'svelte-i18n';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { isLocaleLoaded } from '$lib/i18n';

	// as soon as the browser is initialized, set locale to user's default browser language
	export const load = async () => {
		let userBrowserLanguage = window.navigator.language;
		if (browser) {
			locale.set(userBrowserLanguage);
		}
		await waitLocale();
	};
</script>

<!-- added this condition because accessing locales that are not loaded causes errors, and we want to do this to all the website, so I put it here in +layout.svelte -->
{#if $isLocaleLoaded}
	<div class="flex flex-col justify-between min-h-screen">
		<Navbar />
		<div class="flex flex-col">
			<slot />
		</div>
		<Footer />
	</div>
{/if}
