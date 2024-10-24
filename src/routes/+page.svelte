<script lang="ts">
	import { isLocaleLoaded } from '$lib/i18n';
	import { _ } from 'svelte-i18n';

	import { locale } from 'svelte-i18n';
	function handleLocaleChange(selectedLanguage: 'en' | 'fr' | 'de' = 'en') {
		$locale = selectedLanguage;
		localStorage.setItem('locale', selectedLanguage);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="content">
	{#if $isLocaleLoaded}
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
		<h1>{$_('body_text')}</h1>
	{:else}
		<div>Locale initializing...</div>
	{/if}
</div>

<button class="btn btn-primary" on:click={() => handleLocaleChange('en')}>en</button>
<button class="btn btn-primary" on:click={() => handleLocaleChange('fr')}>fr</button>
<button class="btn btn-primary" on:click={() => handleLocaleChange('de')}>de</button>
