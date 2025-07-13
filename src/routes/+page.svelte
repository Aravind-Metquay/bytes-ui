<script lang="ts">
	import { Button, Modal } from "$lib/index.js";
    let isOpen = $state(false)
</script>

<div class='h-[100vh] w-full flex justify-center items-center'>
    <Button variant="primary" onclick={()=>isOpen = true}>
        Add New
    </Button>

    <Modal open={false}>
        Hey there from modal
    </Modal>
</div>