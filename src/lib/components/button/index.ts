import type { Button as ButtonPrimitive, WithoutChildren } from 'bits-ui';
import type { Snippet } from 'svelte';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			primary: 'text-white inline-flex px-3 py-1 rounded-lg bg-[#7F56D9] border border-[#7F56D9] hover:bg-[#6941C6] hover:border-[#6941C6] active:scale-[0.98] active:transition-all shadow-sm',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			md: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md'
	}
});

export type ButtonProps<
//   StartContent extends Component,
//   EndContent extends Component,
//   LoadingComponent extends Component,
> = WithoutChildren<ButtonPrimitive.RootProps> & {
    // loadingSide?: "start" | "end";
    // loadingComponent?: Snippet | TypedComponent<LoadingComponent>;
    // startContent?: Snippet | TypedComponent<StartContent>;
    // endContent?: Snippet | TypedComponent<EndContent>;
    // isLoading?: boolean;
    
    variant?: ButtonVariantProps["variant"];
    size?: ButtonVariantProps["size"];
//   color?: ButtonVariantProps["color"];
//   radius?: ButtonVariantProps["radius"];
    children?: Snippet<
    [
      {
        variant?: ButtonVariantProps["variant"];
        size?: ButtonVariantProps["size"];
        // isLoading?: boolean;
        // color?: ButtonVariantProps["color"];
        // radius?: ButtonVariantProps["radius"];
      },
    ]
  >;
};

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type Size = VariantProps<typeof buttonVariants>['size'];