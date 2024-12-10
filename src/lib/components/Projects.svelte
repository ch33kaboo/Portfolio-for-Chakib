<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ProjectsList from './ProjectsList.svelte';
</script>

<section
	id="projects"
	class="flex flex-col justify-center gap-5 pt-32 pb-0 sm:pt-24 sm:pb-7 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300/90">
		{$_('projectsSection.title')}
	</h6>
	<p class="-mt-2 text-opacity-90">
		{$_('projectsSection.description')}
	</p>
	<ProjectsList />
</section>
