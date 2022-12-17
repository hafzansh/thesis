<script lang="ts">
  import Grid from "gridjs-svelte";
  import { fly, fade } from "svelte/transition";
  import type { Iklim } from "../../../lib/utils/schema";
  import { faChartLine, faFileCsv, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  import AddModal from "@lib/components/modals/iklim/add_modal.svelte";
  import EditModal from "@lib/components/modals/iklim/edit_modal.svelte";
  import DeleteModal from "@lib/components/modals/iklim/delete_modal.svelte";
  import Fa from "svelte-fa";
  import { h } from "gridjs";
  import { get_data } from "../../../lib/shared/api";
import { baseApi } from "../../../lib/utils/constants";
import { page, session } from "$app/stores";
import { downloadCSV } from "../../../lib/components/others/blob_download";
  export let data: Iklim[] = [];
  let edit_response:Iklim = {
    stasiun:"1",
    tahun:"2000",
    suhu_min:0,
    suhu_max:0,
    suhu_avg:0,
    humidity_avg: 0,
    curah_hujan:0,
    hari_hujan:0,
    penyinaran:0,
    id:0,
  }
  const columns = [
    {
      name: "ID",
      id: "id",
      hidden: true,
    },
    {
      name: "Tahun",
      id: "tahun",
    },
    {
      name: "Stasiun",
      id: "stasiun",
    },
    {
      name: "Suhu (Min)°",
      id: "suhu_min",
    },
    {
      name: "Suhu (Max)°",
      id: "suhu_max",
    },
    {
      name: "Suhu (Avg)°",
      id: "suhu_avg",
    },
    {
      name: "Humidity (Avg)%",
      id: "humidity_avg",
    },
    {
      name: "Curah Hujan (mm)",
      id: "curah_hujan",
    },
    {
      name: "Hari Hujan",
      id: "hari_hujan",
    },
    {
      name: "Penyinaran (%)",
      id: "penyinaran",
    },
    {
      name: "Action",
      formatter: (cell: any, row: any) => {
        return h(
          "div",
          {
            className:
              "p-0 grid grid-flow-row auto-rows-max justify-center font-inter",
          },
          h(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: () => {
                edit_data(row.cells[0].data);
              },
            },
            "Edit"
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
                delete_data(row.cells[0].data);

              },
            },
            "Delete"
          )
        );
      },
    },
  ];
  let add_modal = false;
  let edit_modal = false;
  let delete_modal = false;
  const edit_data = async (data: any) => {
    edit_modal = !edit_modal;
    const response = await get_data(
      `${baseApi}/iklim/id/${data}`,
      $session.user.auth_token
    ).then((res) => res.json());
    edit_response = response;
  };
  const delete_data = async (data: any) => {
    delete_modal = !delete_modal;
    const response = await get_data(
      `${baseApi}/iklim/id/${data}`,
      $session.user.auth_token
    ).then((res) => res.json());
    edit_response = response;
  };
  const path = `${$page.url.pathname}/print`
</script>

<DeleteModal bind:values={delete_modal} bind:data {edit_response} />
<EditModal bind:values={edit_modal} {edit_response} />
<AddModal bind:values={add_modal} />
<div in:fly={{ y: 500, duration: 500 }} out:fade>
  <div class="relative capitalize">
    <div class="absolute top-0 right-0 z-10 ">
      <button class="btn bg-base-200 text-neutral" on:click={()=>downloadCSV(data)}>
        <Fa icon={faFileCsv} class="mr-3" />
        CSV
      </button>
      <button class="btn bg-base-200 text-neutral" on:click={()=>window.open(path)}>
        <Fa icon={faChartLine} class="mr-3" />
        Table
      </button>
      <button
        class="btn bg-base-200 text-neutral"
        on:click={() => (add_modal = !add_modal)}
      >
        <Fa icon={faSquarePlus} class="mr-3" />
        Add Data
      </button>
    </div>
    <Grid
      pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
      fixedHeader={true}
      {columns}
      search={true}
      className={{
        table: "w-full h-11/12",
        search: "",
      }}
      {data}
    />
  </div>
</div>
