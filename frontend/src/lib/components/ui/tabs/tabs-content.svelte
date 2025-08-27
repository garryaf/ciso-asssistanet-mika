<script lang="ts">
  import { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs';
  import { cn } from '$lib/utils';

  export let value: string;
  export let className: string = '';
</script>

<TabsContentPrimitive
  {value}
  class={cn(
    'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    className
  )}
  {...$$restProps}
>
  <slot />
</TabsContentPrimitive> 