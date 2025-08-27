<script lang="ts">
  import { Tabs as TabsPrimitive } from '@radix-ui/react-tabs';
  import { cn } from '$lib/utils';

  export let value: string;
  export let className: string = '';
</script>

<TabsPrimitive.Root
  bind:value
  class={cn('w-full', className)}
  {...$$restProps}
>
  <slot />
</TabsPrimitive.Root> 