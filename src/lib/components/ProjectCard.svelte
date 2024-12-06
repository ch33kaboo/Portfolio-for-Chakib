<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let projectTitle: string = '';
	export let description: string = '';
	export let keyFeatures: string = '';
	export let techStack: string = '';
	export let codeURL: string = '';
	export let previewURL: string = '';
</script>

<div
	class="bg-gray-50 bg-opacity-5 w-full flex flex-col gap-4 p-3 rounded-md sm:p-5 sm:rounded-lg border-white border-[1px] border-opacity-10 shadow-md hover:shadow-lg hover:border-opacity-20 transition-all text-gray-200"
>
	<h6 class="font-semibold text-xl">{projectTitle}</h6>
	<div class="flex flex-col justify-start items-start gap-2">
		<p>
			<span class="font-semibold">{$_('projectsSection.card.description')}:</span>
			{@html description}
		</p>
		{#if keyFeatures}
			<p>
				<span class="font-semibold">{$_('projectsSection.card.keyFeatures')}:</span>
				{@html keyFeatures}
			</p>
		{/if}
		{#if techStack}
			<p>
				<span class="font-semibold">Tech Stack:</span>
				{@html techStack}
			</p>
		{/if}
	</div>
	{#if codeURL || previewURL}
		<div class="flex flex-row gap-3">
			{#if codeURL}
				<a href={codeURL} rel="noopener noreferrer" target="_blank" aria-label="code">
					<button
						class="btn btn-active btn-ghost flex flex-row no-animation hover:border-white hover:border-opacity-30 hover:shadow-lg sm:px-6"
					>
						<svg
							class="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							data-slot="icon"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
							></path>
						</svg>
						<p class="sm:ml-1 w-2/3 sm:w-auto">{$_('projectsSection.card.sourceCode')}</p>
					</button>
				</a>
			{/if}
			{#if previewURL}
				<a href={previewURL} rel="noopener noreferrer" target="_blank" aria-label="preview">
					<button
						class="btn btn-active btn-ghost flex flex-row no-animation hover:border-white hover:border-opacity-30 hover:shadow-lg sm:px-6"
					>
						<svg
							class="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							data-slot="icon"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
							></path>
						</svg>
						<p class="sm:ml-1 w-2/3 sm:w-auto">{$_('projectsSection.card.liveDemo')}</p></button
					>
				</a>
			{/if}
		</div>
	{/if}
</div>
