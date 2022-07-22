<script context="module">
    import { faChartLine, faFileCsv, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
    import { h, html } from "gridjs";
    import {page, session} from '$app/stores'
    import Grid from "gridjs-svelte";
    import Fa from "svelte-fa";
    import { fly, fade } from "svelte/transition";
</script>

<script lang="ts">
import { goto } from "$app/navigation";
import type { Model_Type } from "../../../lib/utils/schema";
import { downloadCSV } from "../../../lib/components/others/blob_download";
import { baseApi } from "../../../lib/utils/constants";
import { get_data } from "../../../lib/shared/api";
import DeleteModal from "../../../lib/components/modals/model/delete_modal.svelte";
import AddModal from "../../../lib/components/modals/model/add_modal.svelte";
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
                delete_data(row.cells[0].data)
              },
            },
            "Delete"
          )
        );
      },
    },
  ];
  export let data: Model_Type[];
  let delete_modal:boolean =false
  let add_modal:boolean =false
  const path = `${$page.url.pathname}/print`
  let edit_response:Model_Type
  const delete_data = async (data: any) => {
    delete_modal = !delete_modal;
    const response = await get_data(
      `${baseApi}/model/id/${data}`,
      $session.user.auth_token
    ).then((res) => res.json());
    edit_response = response;
  };
</script>
<AddModal bind:values={add_modal}/>
<DeleteModal bind:values={delete_modal} bind:data {edit_response} />
<div in:fly={{ y: 500, duration: 500 }} out:fade>
  <div class="relative capitalize">
    <div class="absolute top-0 right-0 z-10 ">
      <button class="btn bg-base-200 text-neutral" on:click={()=>downloadCSV(data)}>
        <Fa icon={faFileCsv} class="mr-3" />
        CSV
      </button>
      <button class="btn bg-base-200 text-neutral" on:click={()=>window.open(path)}>
        <Fa icon={faChartLine} class="mr-3" />
        Report
      </button>
      <button class="btn bg-base-200 text-neutral" on:click="{()=>add_modal=!add_modal}">
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
