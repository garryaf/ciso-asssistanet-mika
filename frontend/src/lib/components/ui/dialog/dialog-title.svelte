<script lang="ts">
  import { DialogTitle as DialogTitlePrimitive } from '@radix-ui/react-dialog';
  import { cn } from '$lib/utils';

  export let className: string = '';
</script>

<DialogTitlePrimitive
  class={cn(
    'text-lg font-semibold leading-none tracking-tight',
    className
  )}
  {...$$restProps}
>
  <slot />
</DialogTitlePrimitive> 