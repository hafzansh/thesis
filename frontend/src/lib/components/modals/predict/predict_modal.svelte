<script lang="ts">
  import type { Model_Type } from "../../../utils/schema";
  import Grid from "gridjs-svelte";
  import { onMount } from "svelte/internal";
  import { get_data } from "../../../shared/api";
  import { baseApi } from "../../../utils/constants";
  import { session } from "$app/stores";
  import { h, html } from "gridjs";
  export let values: boolean = false;
  let data: Model_Type[] = [];
  export let val:any
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
      width: "200px",
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
            val = row.cells[1].data
            values=!values
        },
    },
    "Select"
    )
    );
},
},
];
export let data_binded: Model_Type[] = [
  {
    id: 0,
    path: 0,
    node: 0,
    loss: "0",
    mae: 0,
    size: "0",
    rate: 0,
    epoch: 0,
    result: "0",
  },
];
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="my-modal-5"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-6xl">
    <Grid pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }} {columns} {data} />
    <div class="modal-action">
      <label for="my-modal-5" class="btn">Close</label>
    </div>
  </div>
</div>
