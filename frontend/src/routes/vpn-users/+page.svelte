<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { DataTable } from '$lib/components/ui/data-table';
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '$lib/components/ui/dialog';
  import { Plus } from 'lucide-svelte';
  import AddUserForm from './components/AddUserForm.svelte';
  import { Button } from '$lib/components/ui/button';
  import { webcrypto } from 'crypto';

  interface MatrixUser {
    username: string;
    email: string;
    status: string;
    createdAt: string;
  }

  interface DatabaseUser {
    username: string;
    database: string;
    privileges: string;
    createdAt: string;
  }

  let activeTab = 'matrix';
  let matrixUsers: MatrixUser[] = [];
  let databaseUsers: DatabaseUser[] = [];
  let showAddDialog = false;

  onMount(async () => {
    // TODO: Fetch initial data
    if (!globalThis.crypto) globalThis.crypto = webcrypto as any;
  });

  const matrixColumns = [
    { header: 'Username', accessorKey: 'username' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Created At', accessorKey: 'createdAt' },
    { header: 'Actions', accessorKey: 'actions' }
  ];

  const databaseColumns = [
    { header: 'Username', accessorKey: 'username' },
    { header: 'Database', accessorKey: 'database' },
    { header: 'Privileges', accessorKey: 'privileges' },
    { header: 'Created At', accessorKey: 'createdAt' },
    { header: 'Actions', accessorKey: 'actions' }
  ];

  function handleAddUser(event: CustomEvent) {
    const userData = event.detail;
    // TODO: Implement API call to add user
    showAddDialog = false;
  }
</script>

<div class="container mx-auto py-6">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">VPN User Management</h1>
    <Dialog bind:open={showAddDialog}>
      <DialogTrigger asChild>
        <Button>
          <Plus class="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New VPN User</DialogTitle>
        </DialogHeader>
        <AddUserForm on:submit={handleAddUser} />
      </DialogContent>
    </Dialog>
  </div>

  <Tabs bind:value={activeTab} class="w-full">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="matrix">Matrix Users</TabsTrigger>
      <TabsTrigger value="database">Database Users</TabsTrigger>
    </TabsList>

    <TabsContent value="matrix">
      <Card>
        <CardHeader>
          <CardTitle>Matrix VPN Users</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={matrixColumns} data={matrixUsers} />
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="database">
      <Card>
        <CardHeader>
          <CardTitle>Database VPN Users</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={databaseColumns} data={databaseUsers} />
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</div> 