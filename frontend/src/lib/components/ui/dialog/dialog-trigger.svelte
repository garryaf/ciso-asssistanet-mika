<script lang="ts">
  import { DialogTrigger as DialogTriggerPrimitive } from '@radix-ui/react-dialog';
  import { cn } from '$lib/utils';

  export let className: string = '';
</script>

<DialogTriggerPrimitive
  class={cn('', className)}
  {...$$restProps}
>
  <slot />
</DialogTriggerPrimitive> 