<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { modalVariants, type ModalProps } from './index.js';
	import type { ClassNameValue } from 'tailwind-merge';
	import Button from '../button/button.svelte';

	let {
		children,
		class: className,
		ref = $bindable(null),
		open = $bindable(false),
		title,
		closable = true,
		closeIcon,
		maskClosable = true,
		keyboard = true,
		mask = true,
		centered = false,
		width = 520,
		footer,
		onOk,
		onCancel,
		okText = 'OK',
		cancelText = 'Cancel',
		confirmLoading = false,
		destroyOnHidden = false,
		size = 'default',
		...rest
	}: ModalProps = $props();

	// Handle OK button click
	function handleOk(e: Event) {
		onOk?.(e);
	}

	// Handle Cancel button click  
	function handleCancel(e: Event) {
		onCancel?.(e);
		open = false;
	}

	// Handle outside interaction
	function handleInteractOutside(e: PointerEvent) {
		if (maskClosable) {
			handleCancel(e);
		} else {
			e.preventDefault();
		}
	}

	// Handle escape key
	function handleEscapeKeydown(e: KeyboardEvent) {
		if (keyboard) {
			handleCancel(e);
		} else {
			e.preventDefault();
		}
	}
</script>

<DialogPrimitive.Root bind:open>
	<DialogPrimitive.Portal>
		{#if mask}
			<DialogPrimitive.Overlay
				class={cn(
					'fixed inset-0 z-50 bg-black/45',
					'data-[state=open]:animate-in data-[state=closed]:animate-out',
					'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
				)}
			/>
		{/if}
		
		<DialogPrimitive.Content
			bind:ref
			class={cn(
				modalVariants({
					size,
					centered,
					class: className as ClassNameValue
				})
			)}
			style="width: {typeof width === 'number' ? width + 'px' : width};"
			onInteractOutside={handleInteractOutside}
			onEscapeKeydown={handleEscapeKeydown}
			{...(!destroyOnHidden ? { forceMount: true } : {})}
			{...rest}
		>
			{#if closable}
				<DialogPrimitive.Close
					class={cn(
						'absolute right-4 top-4 z-10',
						'rounded-sm opacity-70 ring-offset-background transition-opacity',
						'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
						'disabled:pointer-events-none'
					)}
					onclick={handleCancel}
				>
					{#if closeIcon}
						{@render closeIcon()}
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
						<span class="sr-only">Close</span>
					{/if}
				</DialogPrimitive.Close>
			{/if}

			{#if title}
				<DialogPrimitive.Title
					class={cn(
						'text-lg font-semibold leading-none tracking-tight',
						'mb-4 pr-8'
					)}
				>
					{#if typeof title === 'string'}
						{title}
					{:else}
						{@render title()}
					{/if}
				</DialogPrimitive.Title>
			{/if}

			<div class="modal-body">
				{#if children}
					{@render children()}
				{/if}
			</div>

			{#if footer !== null}
				<div class={cn('flex justify-end gap-2 mt-6')}>
					{#if footer}
						{@render footer()}
					{:else}
						<!-- Default footer with Cancel and OK buttons -->
						<Button
							onclick={handleCancel}
						>
							{cancelText}
							</Button>
						
						<Button
							disabled={confirmLoading}
							onclick={handleOk}
						>
							{#if confirmLoading}
								<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
							{/if}
							{okText}
						</Button>
					{/if}
				</div>
			{/if}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>