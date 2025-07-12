import type { Snippet } from 'svelte';
import { tv, type VariantProps } from 'tailwind-variants';
import type { HTMLButtonAttributes } from 'svelte/elements';

const buttonVariants = tv({
	base: [
		'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap',
		'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50'
	],
	variants: {
		variant: {
			primary: [
				'text-white inline-flex px-3 py-1 rounded-lg bg-[#7F56D9] border border-[#7F56D9]',
				'hover:bg-[#6941C6] hover:border-[#6941C6]',
				'active:scale-[0.98] active:transition-all shadow-sm'
			],
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			sm: 'h-9 rounded-md px-3 text-xs',
			md: 'h-10 px-4 py-2 text-sm',
			lg: 'h-11 rounded-md px-8 text-base',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md'
	}
});


export interface ButtonProps extends Omit<HTMLButtonAttributes, 'children'> {
	/**
	 * The visual style variant of the button.
	 * Controls the color scheme and overall appearance.
	 */
	variant?: ButtonVariantProps['variant'];
	
	/**
	 * The size of the button.
	 * Controls padding, height, and font size.
	 */
	size?: ButtonVariantProps['size'];
	
	/**
	 * Content to render inside the button.
	 * Receives the current variant and size as parameters for conditional rendering.
	 * 
	 * Example:
	 * <Button variant="primary">
	 *   {#snippet children({ variant, size })}
	 *     <span>Current variant: {variant}</span>
	 *   {/snippet}
	 * </Button>
	 */
	children?: Snippet<[{
		variant?: ButtonVariantProps['variant'];
		size?: ButtonVariantProps['size'];
	}]>;
	
	/**
	 * Reference to the underlying button element.
	 * Use this to access the DOM element directly when needed.
	 */
	ref?: HTMLButtonElement | null;
	
	/**
	 * Additional CSS classes to apply to the button.
	 * These will be merged with the variant classes using our cn utility.
	 */
	class?: string;
}


export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonVariant = ButtonVariantProps['variant'];
export type ButtonSize = ButtonVariantProps['size'];


export { buttonVariants };