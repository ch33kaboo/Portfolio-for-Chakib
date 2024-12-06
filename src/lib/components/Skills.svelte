<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	id="skills"
	class="flex flex-col justify-center gap-5 pt-28 pb-0 sm:pt-24 sm:pb-7 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300/90">
		{$_('skillsSection.title')}
	</h6>
	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-y-8 gap-x-16">
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">{$_('skillsSection.languages')}</h6>
			<ul class="list-disc list-inside">
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>python</li>
				<li>SQL</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">Frontend</h6>
			<ul class="list-disc list-inside">
				<li>Svelte & SvelteKit</li>
				<li>React</li>
				<li>Tailwind CSS</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">Backend</h6>
			<ul class="list-disc list-inside">
				<li>Node.js</li>
				<li>Express.js</li>
				<li>NestJS</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">{$_('skillsSection.databases')}</h6>
			<ul class="list-disc list-inside">
				<li>MongoDB</li>
				<li>PostgreSQL</li>
				<li>Redis</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">{$_('skillsSection.toolsOther')}</h6>
			<ul class="list-disc list-inside">
				<li>Git & GitHub</li>
				<li>Docker</li>
				<li>Vercel & Netlify</li>
			</ul>
		</div>
		<div class="flex flex-col gap-3 min-w-40">
			<h6 class="font-semibold text-lg">{$_('skillsSection.itSystems')}</h6>
			<ul class="list-disc list-inside">
				<li>{$_('skillsSection.networking')}</li>
				<li>IoT</li>
			</ul>
		</div>
	</div>
</section>
