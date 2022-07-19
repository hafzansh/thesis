<script context="module">
    import { faChartLine, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
    import { h, html } from "gridjs";
    
    import Grid from "gridjs-svelte";
    import Fa from "svelte-fa";
    import { fly, fade } from "svelte/transition";
</script>

<script lang="ts">
import { goto } from "$app/navigation";
import type { Model_Type } from "../../../lib/utils/schema";

  const columns = [
    {
      name: "ID",
      id: "id",
      hidden: true,
    },
    {
      name: "Path",
      id: "path",
      formatter: (cell:any) => html(`<p class="badge badge-secondary ">${cell}</p>`)
    },
    {
      name: "Nodes",
      id: "node",
    },
    {
      name: "MAE",
      id: "mae",

    },
    {
      name: "Learning Rate",
      id: "rate",
    },
    {
      name: "Test Size",
      id: "size",
    },
    {
      name: "Epoch",
      id: "epoch",
    },
    {
      name: "Action",
      formatter: (cell: any, row: any) => {
        return h(
          "div",
          {
            className:
              "p-0 flex flex-row btn-group justify-center font-inter",
          },
          h(
            "button",
            {
              className: "btn btn-primary btn-sm w-[80px]",
              onClick: () => {
                goto(`/model/data/id/${row.cells[0].data}`)
              },
            },
            "Detail"
          ),
          null,
          h("div", {
            className: "divider h-1 p-0 m-0",
          }),
          null,
          h(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: () => {

              },
            },
            "Delete"
          )
        );
      },
    },
  ];
  export let data: Model_Type[];
</script>

<div in:fly={{ y: 500, duration: 500 }} out:fade>
  <div class="relative capitalize">
    <div class="absolute top-0 right-0 z-10 ">
      <button class="btn bg-base-200 text-neutral">
        <Fa icon={faChartLine} class="mr-3" />
        Report
      </button>
      <button class="btn bg-base-200 text-neutral" on:click="{()=>goto('/model/training')}">
        <Fa icon={faSquarePlus} class="mr-3" />
        New Model
      </button>
    </div>
    <Grid
      pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
      fixedHeader={true}
      sort={true}
      search={true}
      columns={columns}
      className={{
        table: "w-full h-11/12",
        search: "",
      }}
      {data}
    />
  </div>
</div>
