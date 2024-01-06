<script lang="ts">
	import { cn } from '$lib';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAnchorAttributes {}

	let clazz: $$Props['class'] = '';
	export let href: $$Props['href'] = '';
	export { clazz as class };

	const classes = cn(
		'flex items-center justify-center bg-neutral-900 p-2 text-4xl transition rounded-lg hover:bg-neutral-800',
		clazz
	);
</script>

<a {href} class={classes} target="_blank" {...$$restProps}><slot /></a>
