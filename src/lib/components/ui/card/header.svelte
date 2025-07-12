<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import type { HeaderProps } from "./index.ts";

    let {
        children,
        class: className,
        ref = $bindable(null),
        ...rest
    }: HeaderProps = $props();
</script>

<div
    bind:this={ref}
    class={cn("flex flex-col p-4", className)}
    {...rest}
>
    {@render children?.()}
</div>
