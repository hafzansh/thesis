<script lang="ts">
  import { session } from "$app/stores";
  import { onMount } from "svelte";
  import type { Padi } from "../../lib/utils/schema";
  import { fetchThisData } from "./makeData";

  import { writable } from "svelte/store";
  import {
    type ColumnDef,
    createSvelteTable,
    flexRender,
    getCoreRowModel,
    type TableOptions,
  } from "@tanstack/svelte-table";
  type PaginationState = {
    pageIndex: number;
    pageSize: number;
  };

  type PaginationTableState = {
    pagination: PaginationState;
  };

  type PaginationInitialTableState = {
    pagination?: Partial<PaginationState>;
  };
  const defaultColumns: ColumnDef<Padi>[] = [
    {
      accessorKey: "kota",
      cell: (info) => info.getValue(),
    },
    {
      accessorFn: (row) => row.tahun,
      id: "tahun",
      cell: (info) => info.getValue(),
      header: () => "tahun",
    },
    {
      accessorKey: "luas_panen",
      header: () => "Age",
    },
    {
      accessorKey: "luas_lahan",
      header: () => "Visits",
    },
    {
      accessorKey: "produksi",
      header: "Status",
    },
    {
      accessorKey: "produktivitas",
      header: "Profile Progress",
    },
    {
      accessorKey: "id",
      header: "Profile Progress",
    },
  ];
  let data: Padi[] = [];
  const fetchDefault = async () => {
    const data: Padi[] = await fetchThisData($session.user.auth_token).then(
      (res) => res.json()
    );
    return data;
  };
  onMount(async () => {
    data = await fetchDefault();
    rerender();
  });

  const options = writable<TableOptions<Padi>>({
    data: data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  const rerender = () => {
    options.update((options) => ({
      ...options,
      data: data,
    }));
  };
  const table = createSvelteTable(options);
</script>

<div class="p-2">
  <table class="table table-zebra min-w-full">
    <thead>
      {#each $table.getHeaderGroups() as headerGroup}
        <tr>
          {#each headerGroup.headers as header}
            <th>
              {#if !header.isPlaceholder}
                <svelte:component
                  this={flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                />
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </thead>
    <tbody>
      {#each $table.getRowModel().rows as row}
        <tr>
          {#each row.getVisibleCells() as cell}
            <td>
              <svelte:component
                this={flexRender(cell.column.columnDef.cell, cell.getContext())}
              />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="h-4" />
  <button on:click={() => rerender()} class="border p-2"> Rerender </button>
</div>
