<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import type { DescriptionProps } from "./index.ts";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: DescriptionProps = $props();
</script>

<span
    class={cn("text-xs text-on-surface/70", className)}
    bind:this={ref}
    {...rest}>{@render children?.()}</span
>
