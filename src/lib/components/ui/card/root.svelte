<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import { cardVariants, type RootProps } from "./index.ts";

    let {
        class: className,
        children,
        ref = $bindable(null),
        border,
        variant,
        radius,
        ...rest
    }: RootProps = $props();
</script>

<div
    class={cn(
        cardVariants({
            border,
            variant,
            radius,
        }),
        className,
    )}
    bind:this={ref}
    {...rest}
>
    {@render children?.({ border, radius, variant })}
</div>
