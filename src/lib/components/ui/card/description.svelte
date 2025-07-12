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

<p
    bind:this={ref}
    data-card="description"
    class={cn("text-sm", className)}
    {...rest}
>
    {@render children?.()}
</p>
