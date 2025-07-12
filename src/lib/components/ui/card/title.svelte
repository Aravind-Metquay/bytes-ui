<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import type { TitleProps } from "./index.ts";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: TitleProps = $props();
</script>

<p class={cn("font-medium text-md", className)} bind:this={ref} {...rest}>
    {@render children?.()}
</p>
