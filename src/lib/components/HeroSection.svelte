<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section
	class="flex flex-col justify-center gap-5 mt-[85px] sm:mt-6 mb-0 sm:mb-10 items-start mx-8 sm:mx-64"
	style="font-family: Arial, Helvetica, sans-serif;"
>
	<h1 class="text-4xl sm:text-6xl font-bold text-gray-100 sm:-ml-1">Chakib Ouzane</h1>
	<h2 class="text-2xl sm:text-4xl font-bold text-gray-400">
		{@html $_('heroSection.description')}
	</h2>
	<div class="flex flex-row justify-center gap-4 items-center">
		<a
			href="https://www.linkedin.com/in/chakib-ouzane/"
			rel="noopener noreferrer"
			class="hover:text-white text-gray-400 transition"
			target="_blank"
			aria-label="LinkedIn"
			title="LinkedIn"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
				></path><path d="M2 9H6V21H2z"></path><circle cx="4" cy="4" r="2"></circle></svg
			></a
		>
		<a
			href="https://github.com/ch33kaboo"
			rel="noopener noreferrer"
			class="hover:text-white text-gray-400 transition"
			target="_blank"
			aria-label="GitHub"
			title="GitHub"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				stroke-width="1.7"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M0 0h24v24H0z" stroke="none"></path><path
					d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
				></path></svg
			></a
		>
		<a
			href="https://bsky.app/profile/chakib.tech"
			rel="noopener noreferrer"
			class="hover:text-white text-gray-400 transition"
			target="_blank"
			aria-label="Bluesky"
			title="Bluesky"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 600 535"
				version="1.1"
			>
				<path
					d="m299.75 238.48c-26.326-51.007-97.736-146.28-164.21-193.17-63.677-44.919-88.028-37.186-103.82-29.946-18.428 8.3915-21.719 36.692-21.719 53.311s9.0496 136.57 15.138 156.48c19.745 66.145 89.674 88.522 154.17 81.282 3.2908-0.49362 6.5816-0.98723 10.037-1.3163-3.2908 0.49362-6.7461 0.98723-10.037 1.3163-94.445 13.986-178.52 48.374-68.284 170.96 121.1 125.38 166.02-26.82 189.06-104.15 23.035 77.169 49.526 223.94 186.75 104.15 103.17-104.15 28.301-156.97-66.145-170.96-3.2908-0.32908-6.7461-0.82269-10.037-1.3163 3.4553 0.49362 6.7461 0.82269 10.037 1.3163 64.499 7.2397 134.59-15.138 154.17-81.282 5.9234-20.074 15.138-139.86 15.138-156.48s-3.2908-44.919-21.719-53.311c-15.96-7.2397-40.148-14.973-103.82 29.946-66.967 47.058-138.38 142.16-164.7 193.17z"
					class="hover:fill-white fill-gray-400 transition"
				/>
			</svg>
		</a>
	</div>
</section>
