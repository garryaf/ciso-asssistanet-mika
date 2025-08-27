<script lang="ts">
  import { cn } from '$lib/utils';
  import { buttonVariants } from './index';
  import type { ButtonProps } from './index';

  export let variant: ButtonProps['variant'] = 'default';
  export let size: ButtonProps['size'] = 'default';
  export let className: string = '';
</script>

<button
  class={cn(buttonVariants({ variant, size }), className)}
  {...$$restProps}
>
  <slot />
</button> 