<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
</script>

<ProjectCard
projectTitle={$_('projectsSection.project1.projectTitle')}
description={$_('projectsSection.project1.description')}
keyFeatures={$_('projectsSection.project1.keyFeatures')}
techStack={$_('projectsSection.project1.techStack')}
codeURL="https://example.com"
previewURL="https://example.com"
/>
