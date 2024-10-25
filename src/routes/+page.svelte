<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { isLocaleLoaded } from '$lib/i18n';
	import { _ } from 'svelte-i18n';

	import { locale } from 'svelte-i18n';
	function handleLocaleChange(selectedLanguage: 'en' | 'fr' | 'de' = 'en') {
		$locale = selectedLanguage;
		localStorage.setItem('locale', selectedLanguage);
	}
</script>

<About />
<Skills />
<Projects />
<Blog />
<Contact />
