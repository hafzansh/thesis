<script lang="ts">
  import Grid from "gridjs-svelte";
  import { fly, fade } from "svelte/transition";
  import type { Iklim } from "../../../lib/utils/schema";
  import { faChartLine, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  import AddModal from '@lib/components/modals/iklim/add_modal.svelte'
  import Fa from "svelte-fa";
import { h } from "gridjs";
  export let data: Iklim[] = [];
  const columns = [
    {
        name: "Tahun",
        id: "tahun"
    },
    {
        name: "Stasiun",
        id: "stasiun",
    },
    {
        name: "Suhu (Min)°",
        id: "suhu_min"
    },
    {
        name: "Suhu (Max)°",
        id: "suhu_max"
    },
    {
        name: "Suhu (Avg)°",
        id: "suhu_avg"
    },
    {
        name: "Humidity (Avg)%",
        id: "humidity_avg"
    },
    {
        name: "Curah Hujan (mm)",
        id: "curah_hujan"
    },
    {
        name: "Hari Hujan",
        id: "hari_hujan"
    },
    {
        name: "Penyinaran (%)",
        id: "penyinaran"
    },
    {
        name: "ID",
        id: "id",
        hidden: true
    },
    {
        name: "Action",
        formatter: (cell: any, row: any) => {
          return h(
            "div",
            {
              className: "p-0 grid grid-flow-row auto-rows-max justify-center font-inter",
            },
            h(
              "button",
              {
                className: "btn btn-primary btn-sm",
                onClick: () => {
        
                },
              },
              "Edit"
            ),
            null,
            h(
              "div",
              {
                className: "divider h-1 p-0 m-0",
              },              
            ),
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
]
  let add_modal = false
  let edit_modal = false
  let delete_modal = false
  // async function reload() {
  //   const res = await get(`${baseApi}/iklim/`, $session.user.auth_token).then(
  //     (res) => res.json()
  //   );
  //   if (res) {
  //     data = res;
  //   }
  // }
  // onMount(async () => {
  //   // reload();
  // });
</script>
<AddModal bind:values={add_modal} />
<div in:fly={{ y: 500, duration: 500 }} out:fade>
  <div class="relative capitalize">
    <div class="absolute top-0 right-0 z-10 ">
      <button
        class="btn bg-base-200 text-neutral"        
      >
        <Fa icon={faChartLine} class="mr-3" />
        Report
      </button>
      <button
        class="btn bg-base-200 text-neutral"
        on:click="{() => add_modal =!add_modal}"
      >
        <Fa icon={faSquarePlus} class="mr-3" />
        Add Data
      </button>
    </div>
  <Grid
    pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
    fixedHeader={true}
    columns={columns}
    search={true}
    className={{
      table: "w-full h-11/12",
      search: "",
    }}
    {data}
  />
  </div>
</div>
