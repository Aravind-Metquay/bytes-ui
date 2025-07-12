<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import type { ContentProps } from "./index.ts";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: ContentProps = $props();
</script>

<div {...rest} class={cn("flex flex-col gap-1", className)} bind:this={ref}>
    {@render children?.()}
</div>
