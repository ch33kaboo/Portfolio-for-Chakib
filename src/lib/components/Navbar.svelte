<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { locale } from 'svelte-i18n';

	let navbarReachedTop = false;

	function handleScroll() {
		navbarReachedTop = window.scrollY > 68;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleLocaleChange(selectedLanguage: 'en' | 'fr' | 'de' = 'en') {
		$locale = selectedLanguage;
		localStorage.setItem('locale', selectedLanguage);
	}
</script>

<nav
	class="sm:my-[68px] navbar bg-base-100 sticky top-0 flex flex-row justify-center"
	class:shadow-md={navbarReachedTop}
	class:border-opacity-5={navbarReachedTop}
	class:border-b={navbarReachedTop}
	class:border-white={navbarReachedTop}
>
	<ul class="menu menu-horizontal flex flex-row justify-center gap-0 sm:gap-4">
		<li><a class="capitalize text-base" href="#about">{$_('navbar.about')}</a></li>
		<li><a class="capitalize text-base" href="#skills">{$_('navbar.skills')}</a></li>
		<li><a class="capitalize text-base" href="#projects">{$_('navbar.projects')}</a></li>
		<li><a class="capitalize text-base" href="#blog">{$_('navbar.blog')}</a></li>
		<li><a class="capitalize text-base" href="#contact">{$_('navbar.contact')}</a></li>
		<li>
			<details>
				<summary class="capitalize text-base"
					>{$_('navbar.language')} : {$_(
						`navbar.${$locale == 'en' ? 'english' : $locale == 'fr' ? 'french' : 'german'}`
					)}</summary
				>
				<ul class="bg-base-100 p-2 right-0 border-white border-[1px] border-opacity-5">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<a
							class="capitalize {$locale == 'en'
								? 'font-bold underline bg-gray-100 bg-opacity-[0.03]'
								: ''}"
							on:click={() => handleLocaleChange('en')}>{$_('navbar.english')}</a
						>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<a
							class="capitalize {$locale == 'fr'
								? 'font-bold underline bg-gray-100 bg-opacity-[0.03]'
								: ''}"
							on:click={() => handleLocaleChange('fr')}>{$_('navbar.french')}</a
						>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<a
							class="capitalize {$locale == 'de'
								? 'font-bold underline bg-gray-100 bg-opacity-[0.03]'
								: ''}"
							on:click={() => handleLocaleChange('de')}>{$_('navbar.german')}</a
						>
					</li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
