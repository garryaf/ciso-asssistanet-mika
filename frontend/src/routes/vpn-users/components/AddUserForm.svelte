<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';

  const dispatch = createEventDispatcher();

  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';

  function handleSubmit() {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch('submit', {
      username,
      email,
      password
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <div class="space-y-2">
    <label for="username" class="text-sm font-medium">Username</label>
    <input
      type="text"
      id="username"
      bind:value={username}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      required
    />
  </div>

  <div class="space-y-2">
    <label for="email" class="text-sm font-medium">Email</label>
    <input
      type="email"
      id="email"
      bind:value={email}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      required
    />
  </div>

  <div class="space-y-2">
    <label for="password" class="text-sm font-medium">Password</label>
    <input
      type="password"
      id="password"
      bind:value={password}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      required
    />
  </div>

  <div class="space-y-2">
    <label for="confirmPassword" class="text-sm font-medium">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      bind:value={confirmPassword}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      required
    />
  </div>

  <div class="flex justify-end space-x-2">
    <Button type="submit">Add User</Button>
  </div>
</form> 