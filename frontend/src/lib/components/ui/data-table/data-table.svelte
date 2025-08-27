<script lang="ts">
  export let columns: { header: string; accessorKey: string }[] = [];
  export let data: any[] = [];
</script>

<div class="w-full overflow-auto">
  <table class="w-full caption-bottom text-sm">
    <thead class="[&_tr]:border-b">
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        {#each columns as column}
          <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            {column.header}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      {#each data as row}
        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          {#each columns as column}
            <td class="p-4 align-middle">
              {row[column.accessorKey]}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div> 