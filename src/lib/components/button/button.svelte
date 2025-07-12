<script lang="ts">
	import { Button } from 'bits-ui';
	let {
		children,
		ref = $bindable(null),
		...rest
	} = $props();
</script>

	<Button.Root
		bind:ref
		class="text-white inline-flex px-3 py-1 rounded-lg bg-[#7F56D9] border border-[#7F56D9] hover:bg-[#6941C6] hover:border-[#6941C6] active:scale-[0.98] active:transition-all shadow-sm"
		{...rest}
		>
		{@render children()}
	</Button.Root>
