<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	id="about"
	class="flex flex-col justify-center gap-5 pt-28 pb-0 sm:pt-24 sm:pb-7 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300/90">
		{$_('aboutSection.title')}
	</h6>
	<div class="w-full flex flex-col justify-center items-start gap-2">
		<p class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
			{@html $_('aboutSection.intro')}
		</p>
		<p class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
			{$_('aboutSection.portfolio')}
		</p>
		<p class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
			{$_('aboutSection.goals')}
		</p>
		<p class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
			{$_('aboutSection.additionalInterests')}
		</p>
		<a
			class="border rounded-md px-4 py-2 mt-4 bg-white text-base-100 font-bold flex w-fit gap-2 items-center shadow"
			target="_blank"
			rel="noopener noreferrer"
			href="/resume.pdf"
			>{$_('aboutSection.CV')}.pdf
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-download"
				width="24"
				height="24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M0 0h24v24H0z" stroke="none"></path><path
					d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"
				></path></svg
			></a
		>
	</div>
</section>
