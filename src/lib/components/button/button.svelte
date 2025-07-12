<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { buttonVariants, type ButtonProps } from './index.js';
	import type { ClassNameValue } from 'tailwind-merge';

	let {
		children,
		class: className,
		ref = $bindable(null), 
		variant = 'primary',
		size = 'md',
		...rest
	}: ButtonProps = $props();
</script>


<ButtonPrimitive.Root
	bind:ref
	class={cn(
		buttonVariants({
			variant,
			size,
			class: className as ClassNameValue
		})
	)}
	{...rest}
>
	{#if children}
		{@render children({
			variant,
			size,
		})}
	{/if}
</ButtonPrimitive.Root>
