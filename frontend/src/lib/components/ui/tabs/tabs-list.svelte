<script lang="ts">
  import { TabsList as TabsListPrimitive } from '@radix-ui/react-tabs';
  import { cn } from '$lib/utils';

  export let className: string = '';
</script>

<TabsListPrimitive
  class={cn(
    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
    className
  )}
  {...$$restProps}
>
  <slot />
</TabsListPrimitive> 