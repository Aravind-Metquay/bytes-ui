<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import { alertVariants, type RootProps } from "./index.ts";

    let {
        class: className,
        children,
        variant,
        radius,
        border,
        ref = $bindable(null),
        ...rest
    }: RootProps = $props();
</script>

<div
    class={cn(
        alertVariants({
            radius,
            variant,
            border,
        }),
        className,
    )}
    bind:this={ref}
    {...rest}
>
    {@render children?.()}
</div>
