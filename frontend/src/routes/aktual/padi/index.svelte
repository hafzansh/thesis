<script lang="ts">
  import { session } from "$app/stores";
  import Grid from "gridjs-svelte";
  import EditModal from "../../../lib/components/modals/edit_modal.padi.svelte";

  import { addToast } from "../../../lib/utils/store";
  import { onMount } from "svelte";
  import { baseApi, city } from "@lib/utils/constants";
  import type { Padi, TProps } from "@lib/utils/schema";
  import { fetchThisData } from "../../test/makeData";
  import { h } from "gridjs";
  import { fly, fade } from "svelte/transition";
  import { get } from "../../../lib/shared/api";
  import DeleteModal from "../../../lib/components/modals/delete_modal.padi.svelte";
  import Fa from "svelte-fa";
  import { faChartLine, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  let selected: any;
  let open = false;
  let opena = false;
  let edit_response: Padi = {
    kota: "string",
    tahun: "string",
    luas_panen: 0,
    luas_lahan: 0,
    produktivitas: 0,
    produksi: 0,
    id: 0,
  };
  const tableProps: TProps = {
    fixedHeader: true,
    columns: [
      {
        name: "id",
        hidden: true,
      },
      "Tahun",
      "Kota",
      { id: "luas_lahan", name: "Luas Lahan" },
      { id: "luas_panen", name: "Luas Panen" },
      "Produktivitas",
      { id: "produksi", name: "Hasil Produksi" },
      {
        name: "Action",
        width: "200px",
        formatter: (cell: any, row: any) => {
          return h(
            "div",
            {
              className: "p-0 flex justify-center btn-group font-inter",
            },
            h(
              "button",
              {
                className: "btn btn-primary btn-sm w-[80px]",
                onClick: () => {
                  update_edit(row.cells[0].data);
                },
              },
              "Edit"
            ),
            null,
            h(
              "div",
              {
                className: "w-[5px] h-[32px] bg-primary-focus",
              },              
            ),
            null,
            h(
              "button",
              {
                className: "btn btn-primary btn-sm w-100",
                onClick: () => {
                  update(row.cells[0].data);
                },
              },
              "Delete"
            )
          );
        },
      },
    ],
  };
  const fetchDefault = async () => {
    const response: Padi[] = await fetchThisData($session.user.auth_token).then(
      (res) => res.json()
    );
    return response;
  };
  let data: Padi[] = [];
  onMount(async () => {
    const post = await fetchDefault().then();
    post.map((p) => {
      p.kota = city[parseInt(p.kota)];
    });
    data = post;
  });
  const update = async (data: any) => {
    opena = !opena;
    selected = data;
    const response = await get(
      `${baseApi}/padi/id/${data}`,
      $session.user.auth_token
    ).then((res) => res.json());
    edit_response = response;
  };
  const update_edit = async (data: any) => {
    open = !open;
    selected = data;
    const response = await get(
      `${baseApi}/padi/id/${data}`,
      $session.user.auth_token
    ).then((res) => res.json());
    edit_response = response;
  };
</script>

<div in:fly={{ y: 500, duration: 1000 }} out:fade>
  <DeleteModal bind:open={opena} bind:data {selected} {edit_response} />
  <EditModal bind:values={open} bind:data {selected} {edit_response} />
  <div class="relative capitalize">
    <div class="absolute top-0 right-0 z-10">
      <button
        class="btn bg-base-200 text-neutral "
        on:click={() =>
          addToast({
            message: "asasasas",
            type: "success",
            dissmissible: true,
            timeout: 3000,
          })}
      >
        <Fa icon={faChartLine} class="mr-3" />
        Report
      </button>
      <button
        class="btn bg-base-200 text-neutral"
        on:click={() =>
          addToast({
            message: "asasasas",
            type: "success",
            dissmissible: true,
            timeout: 3000,
          })}
      >
        <Fa icon={faSquarePlus} class="mr-3" />
        Add Data
      </button>
    </div>
    <div class="z-20">
      <Grid
        pagination={{
          enabled: true,
          limit: 10,
          summary: true,
          buttonsCount: 5,
        }}
        {...tableProps}
        search={true}
        className={{
          table: "w-full",
          search: "",
        }}
        {data}
      />
    </div>
  </div>
</div>
