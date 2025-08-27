<script lang="ts">
  import { Dialog as DialogPrimitive } from '@radix-ui/react-dialog';
  import { cn } from '$lib/utils';

  export let open: boolean = false;
  export let className: string = '';
</script>

<DialogPrimitive.Root bind:open>
  <slot />
</DialogPrimitive.Root> 