<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section
	id="projects"
	class="flex flex-col justify-center gap-5 pt-28 pb-0 sm:pt-20 sm:pb-7 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300/90">
		{$_('projectsSection.title')}
	</h6>
    <p class="-mt-2 opacity-90">
		{$_('projectsSection.description')}
	</p>
	<ProjectCard
		projectTitle={$_('projectsSection.project1.projectTitle')}
		description={$_('projectsSection.project1.description')}
		keyFeatures={$_('projectsSection.project1.keyFeatures')}
		techStack={$_('projectsSection.project1.techStack')}
		codeURL="https://example.com"
		previewURL="https://example.com"
	/>
</section>
