import type { Snippet } from 'svelte';
import { tv, type VariantProps } from 'tailwind-variants';

const modalVariants = tv({
	base: [
		'fixed z-50 gap-4 bg-background p-6 shadow-lg border',
		'data-[state=open]:animate-in data-[state=closed]:animate-out',
		'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
		'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
		'rounded-lg'
	],
	variants: {
		size: {
			small: 'max-w-md',
			default: 'max-w-lg', 
			large: 'max-w-2xl',
			extraLarge: 'max-w-4xl'
		},
		centered: {
			true: 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
			false: 'left-[50%] top-[20%] translate-x-[-50%]'
		}
	},
	defaultVariants: {
		size: 'default',
		centered: false
	}
});

export interface ModalProps {
	/**
	 * Whether the modal dialog is visible or not
	 */
	open?: boolean;

	/**
	 * The modal dialog's title
	 */
	title?: string | Snippet;

	/**
	 * Content to render inside the modal body
	 */
	children?: Snippet;

	/**
	 * Whether a close (x) button is visible on top right or not
	 * @default true
	 */
	closable?: boolean;

	/**
	 * Custom close icon
	 */
	closeIcon?: Snippet;

	/**
	 * Whether to close the modal dialog when the mask (area outside the modal) is clicked
	 * @default true
	 */
	maskClosable?: boolean;

	/**
	 * Whether support press esc to close
	 * @default true
	 */
	keyboard?: boolean;

	/**
	 * Whether show mask or not
	 * @default true
	 */
	mask?: boolean;

	/**
	 * Centered Modal
	 * @default false
	 */
	centered?: boolean;

	/**
	 * Width of the modal dialog
	 * @default 520
	 */
	width?: string | number;

	/**
	 * The size variant of the modal
	 * Controls the max-width of the modal
	 */
	size?: ModalVariantProps['size'];

	/**
	 * Footer content, set as null when you don't need default buttons
	 */
	footer?: Snippet | null;

	/**
	 * Text of the OK button
	 * @default 'OK'
	 */
	okText?: string;

	/**
	 * Text of the Cancel button  
	 * @default 'Cancel'
	 */
	cancelText?: string;

	/**
	 * Whether to apply loading visual effect for OK button or not
	 * @default false
	 */
	confirmLoading?: boolean;

	/**
	 * Whether to unmount child components on close
	 * @default false
	 */
	destroyOnHidden?: boolean;

	/**
	 * Specify a function that will be called when a user clicks the OK button
	 */
	onOk?: (e: Event) => void;

	/**
	 * Specify a function that will be called when a user clicks mask, close button or Cancel button
	 */
	onCancel?: (e: Event) => void;

	/**
	 * Reference to the underlying modal element
	 */
	ref?: HTMLDivElement | null;

	/**
	 * Additional CSS classes to apply to the modal
	 */
	class?: string;

	/**
	 * Common HTML attributes - we explicitly support the most commonly used ones
	 */
	id?: string;
	style?: string;
	tabindex?: number;
	role?: string;
	'aria-label'?: string;
	'aria-labelledby'?: string;
	'aria-describedby'?: string;
	'data-testid'?: string;
}

export type ModalVariantProps = VariantProps<typeof modalVariants>;
export type ModalSize = ModalVariantProps['size'];

export { modalVariants };