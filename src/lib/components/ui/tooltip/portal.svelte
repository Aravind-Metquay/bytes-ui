<script lang="ts">
    import { Tooltip } from "bits-ui";
    import type { TooltipPortalProps } from "./index.ts";

    let { children, ...rest }: TooltipPortalProps = $props();
</script>

<Tooltip.Portal {...rest}>
    {@render children?.()}
</Tooltip.Portal>
