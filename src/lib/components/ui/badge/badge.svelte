<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.ts";
    import { badgeVariants, type BadgeProps } from "./index.ts";

    let {
        children,
        class: className,
        ref,
        color,
        size,
        ...rest
    }: BadgeProps = $props();
</script>

<div {...rest} bind:this={ref} class={cn(badgeVariants({ color, size }))}>
    {@render children?.()}
</div>
