<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	id="contact"
	class="flex flex-col justify-center gap-5 pt-32 pb-10 sm:py-28 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h6 class="uppercase text-xl tracking-wide font-bold text-gray-300/90">
		{$_('contactSection.title')}
	</h6>
	<div class="w-full flex flex-col justify-center items-start gap-2">
		<p class="leading-relaxed md:leading-8 md:text-lg tracking-wide md:tracking-wider">
			{$_('contactSection.description')}
		</p>
		<div class="flex flex-row justify-start sm:justify-center items-center w-full gap-5 sm:gap-10">
			<a
				href="mailto:chakibouzane2021@gmail.com"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="email"
				title="email"
				><button class="btn btn-active btn-ghost no-animation sm:btn-wide hover:scale-105"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler hidden sm:block icons-tabler-outline icon-tabler-mail"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
						/><path d="M3 7l9 6l9 -6" /></svg
					>
					<p>Email</p></button
				></a
			>
			<a
				href="https://www.linkedin.com/in/chakib-ouzane/"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="linkedin"
				title="linkedin"
				><button class="btn btn-active btn-ghost no-animation sm:btn-wide hover:scale-105"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler hidden sm:block icons-tabler-outline icon-tabler-brand-linkedin"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path
							d="M8 8v.01"
						/><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path
							d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
						/></svg
					>
					<p>LinkedIn</p></button
				></a
			>
			<a
				href="https://github.com/ch33kaboo"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="github"
				title="github"
				><button class="btn btn-active btn-ghost no-animation sm:btn-wide hover:scale-105"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler hidden sm:block icons-tabler-outline icon-tabler-brand-github"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
						/></svg
					>
					<p>GitHub</p></button
				></a
			>
		</div>
	</div>
</section>
