<script lang="ts">
    import { cn } from "@lib/shared/utils/classes.js";
    import { inputVariants, type InputProps } from "./index.ts";

    let {
        class: className,
        radius,
        invalid,
        variant,
        ...rest
    }: InputProps = $props();
</script>

<input
    class={cn(
        inputVariants({
            radius,
            variant,
        }),
        invalid && "border-error placeholder-error/50",
        className,
    )}
    {...rest}
/>
