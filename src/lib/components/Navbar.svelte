<!-- this is navbar, it will have About, skills, projects, blog, contact (all take to same page) and
change language (just like miloudidotdev) for the look, I like how aaronfrancisdotcom looks and
janasundardotdev -->

<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { locale } from 'svelte-i18n';
	function handleLocaleChange(selectedLanguage: 'en' | 'fr' | 'de' = 'en') {
		$locale = selectedLanguage;
		localStorage.setItem('locale', selectedLanguage);
	}
</script>

<nav class="my-[68px] navbar bg-base-100 sticky top-0 flex flex-row justify-center">
	<ul class="menu menu-horizontal flex flex-row justify-center gap-4">
		<li><a class="capitalize" href="#about">{$_('navbar.about')}</a></li>
		<li><a class="capitalize" href="#skills">{$_('navbar.skills')}</a></li>
		<li><a class="capitalize" href="#projects">{$_('navbar.projects')}</a></li>
		<li><a class="capitalize" href="#blog">{$_('navbar.blog')}</a></li>
		<li><a class="capitalize" href="#contact">{$_('navbar.contact')}</a></li>
		<li>
			<details>
				<summary class="capitalize">language</summary>
				<ul class="bg-base-100 rounded-t-none p-2">
					<li>
						<a href="" class="capitalize" on:click={() => handleLocaleChange('en')}
							>{$_('navbar.english')}</a
						>
					</li>
					<li>
						<a href="" class="capitalize" on:click={() => handleLocaleChange('fr')}
							>{$_('navbar.french')}</a
						>
					</li>
					<li>
						<a href="" class="capitalize" on:click={() => handleLocaleChange('de')}
							>{$_('navbar.german')}</a
						>
					</li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
