<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	id="publications"
	class="flex flex-col justify-center gap-5 pt-32 pb-0 sm:pt-24 sm:pb-7 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<div class="flex flex-row items-center gap-4">
		<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300">
			{$_('publicationSection.title')}
		</h6>
		-
		<a
			class="link inline"
			href="https://scholar.google.com/citations?user=Om3VXCoAAAAJ&hl=en"
			target="_blank"
			rel="noreferrer">Google Scholar</a
		>
	</div>
	<div class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
		<div class="mb-1">
			<span class="font-semibold text-gray-300"
				>DRIFT: Distributed RPL Injection Flooding Threat in IoT Networks</span
			>
			<a href="https://hal.science/hal-05651521/" target="_blank" rel="noreferrer">
				<svg
					class="inline w-5 h-5 ml-1 stroke-gray-300 hover:cursor-pointer hover:stroke-gray-100 -translate-y-[1px]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
					<path d="M11 13l9 -9" />
					<path d="M15 4h5v5" />
				</svg>
			</a>
		</div>
		<div style="font-size: 17px; line-height: 25px">
			<span class="font-semibold">Mohamed Chakib Ouzane</span>, Mohammed Amine Boudouaia, Samir
			Ouchani, Abdelatif Rahmoun
		</div>
		<p style="font-size: 17px; line-height: 25px; word-spacing: -2px;">
			FICTA-2026: International Conference on Frontiers of Intelligent Computing: Theory and
			Applications.
		</p>
		<p style="font-size: 17px; line-height: 25px" class="font-semibold">Best Paper Award</p>
	</div>
</section>
