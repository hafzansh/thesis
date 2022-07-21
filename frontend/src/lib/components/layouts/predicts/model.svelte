<script lang="ts">
  import { h, html } from "gridjs";
  import { onMount } from "svelte/internal";
  import { get_data } from "../../../shared/api";
  import { baseApi } from "../../../utils/constants";
  import type { Model_Type } from "../../../utils/schema";
  export let next:boolean

  import Grid from "gridjs-svelte";
  import { session } from "$app/stores";
  let data: Model_Type[] = [];
  export let val:any;
  export let data_binded: Model_Type[] = [];
  onMount(async () => {
    const response = await get_data(
      `${baseApi}/model/`,
      $session.user.auth_token
    ).then((res) => res.json());
    response.map((p: Model_Type) => {
      p.size = `${Math.round(parseFloat(p.size) * 100)}%`;
    });
    data = response;
  });
  const columns = [
    {
      name: "ID",
      id: "id",
      hidden: true,
    },
    {
      name: "Path",
      id: "path",

      formatter: (cell: any) =>
        html(`<p class="badge badge-secondary ">${cell}</p>`),
    },
    {
      name: "Nodes",
      id: "node",
    },
    {
      id: "loss",
      hidden: true,
    },
    {
      name: "MAE",
      id: "mae",
    },
    {
      name: "Test Size",
      id: "size",
    },
    {
      name: "Learning Rate",
      id: "rate",
    },
    {
      name: "Epoch",
      id: "epoch",
    },
    {
      id: "result",
      hidden: true,
    },
    {
      name: "Action",
      formatter: (cell: any, row: any) => {
        return h(
          "div",
          {
            className: "p-0 flex btn-group justify-center font-inter",
          },
          h(
            "button",
            {
              className: "btn btn-primary btn-sm w-[75px]",
              onClick: () => {
                data_binded = [
                  {
                    id: row.cells[0].data,
                    path: row.cells[1].data,
                    node: row.cells[2].data,
                    loss: row.cells[3].data,
                    mae: row.cells[4].data,
                    size: row.cells[5].data,
                    rate: row.cells[6].data,
                    epoch: row.cells[7].data,
                    result: row.cells[8].data,
                  },
                ];
                val = row.cells[1].data;
                next=true
              },
            },
            "Select"
          )
        );
      },
    },
  ];
  const columns2= [
    {
      name: "ID",
      id: "id",
      hidden: true,
    },
    {
      name: "Path",
      id: "path",

      formatter: (cell: any) =>
        html(`<p class="badge badge-secondary ">${cell}</p>`),
    },
    {
      name: "Nodes",
      id: "node",
    },
    {
      id: "loss",
      hidden: true,
    },
    {
      name: "MAE",
      id: "mae",
    },
    {
      name: "Test Size",
      id: "size",
    },
    {
      name: "Learning Rate",
      id: "rate",
    },
    {
      name: "Epoch",
      id: "epoch",
    },
    {
      id: "result",
      hidden: true,
    },    
  ];
</script>

<div class="flex flex-col w-full h-full items-center">
    <div class="mx-10 mt-5">
      <article class="prose text-slate-300 mb-2">
        <h1 class="text-slate-300">Model</h1>
      </article>

      <Grid width="w-full" pagination={{ enabled: true, limit: 6, summary: true, buttonsCount: 5 }} {columns} {data} />
  </div>
  <div class="ml-52 w-full">
    <article class="prose">
        <h1 class="text-slate-300 my-2">Selected Model</h1>
      </article>
      <Grid width="w-full" data={data_binded} columns={columns2} />
  </div>
</div>
