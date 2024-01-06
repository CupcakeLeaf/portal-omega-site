<script lang="ts">
	import { PortalOmega } from '$lib';
	import Link from '$lib/link.svelte';
	import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { faClapperboard, faClipboardList } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import portalOmegaBanner from '../assets/portal_omega_logo.png';
</script>

<div
	class="layout h-full min-h-dvh relative bg-gray-900 text-white [&_a]:text-fuchsia-400 [&_a:visited]:text-fuchsia-600"
>
	<header
		class="flex logo justify-center items-center bg-gradient-to-t from-fuchsia-700 via-fuchsia-950 to-gray-900"
	>
		<img src={portalOmegaBanner} alt="Portal Omega" class="max-w-screen-sm w-full px-5" />
	</header>
	<div class="divider">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
				opacity=".25"
				class="shape-fill"
			></path>
			<path
				d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
				opacity=".5"
				class="shape-fill"
			></path>
			<path
				d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
				class="shape-fill"
			></path>
		</svg>
	</div>
	<main class="content flex flex-col items-center justify-start w-full h-full p-4 gap-8">
		<div class="prose prose-invert md:prose-lg">
			<p>
				Cool People Games is a team of 13 people that is currently developing a Portal 2 mod called <PortalOmega
				/>. Check our Discord server for more information and consider applying as a test subject in
				the <a href="#links">links section</a> below.
			</p>
			<p class="text-xs">
				The trailer for <PortalOmega /> is from a early build and currently outdated, check the Discord
				server for status updates and the recently developed content.
			</p>
			<hr />
		</div>
		<div class="flex flex-col gap-5 items-center justify-start h-full">
			<h1 id="links" class="text-4xl">Links</h1>
			<ul class="flex gap-2 h-full justify-center items-center">
				<li>
					<Link href="https://discord.gg/ystbKHKsVv" title="Discord Server"
						><Fa icon={faDiscord} class="text-5xl sm:text-6xl aspect-square" /></Link
					>
				</li>
				<li>
					<Link href="https://www.youtube.com/@portalomega-mod" title="Youtube Channel">
						<Fa icon={faYoutube} class="text-5xl sm:text-6xl aspect-square" />
					</Link>
				</li>
				<li>
					<Link href="https://youtu.be/-tsmZCnG9t8" title="Mod Trailer" >
						<Fa icon={faClapperboard} class="text-5xl sm:text-6xl aspect-square" />
					</Link>
				</li>
				<li>
					<Link href="https://forms.gle/jsMNdzYEuiY9mY2K9" title="Test Subject Application Form">
						<Fa icon={faClipboardList} class="text-5xl sm:text-6xl aspect-square" />
					</Link>
				</li>
			</ul>
		</div>
	</main>
	<footer class="footer text-md text-center py-1 h-8">
		<p>website by cheesechair and gamesrevolution</p>
	</footer>
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template:
			'logo' auto
			'divider' auto
			'content' 1fr
			'footer' auto;
	}

	.logo {
		grid-area: logo;
	}

	.divider {
		position: absolute;
		grid-area: divider;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.divider svg {
		@apply h-8 sm:h-14 md:h-16;
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
	}

	.divider .shape-fill {
		@apply fill-gray-900;
	}

	.content {
		grid-area: content;
	}

	.footer {
		grid-area: footer;
	}
</style>
