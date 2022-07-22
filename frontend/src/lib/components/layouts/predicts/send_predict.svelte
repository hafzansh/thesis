<script lang="ts">
  import { session } from "$app/stores";

  import { post_data } from "../../../shared/api";
  import { baseApi, city, stasiun } from "../../../utils/constants";
  import Grid from "gridjs-svelte";
  import { onMount } from "svelte/internal";
  import { toast } from "@zerodevx/svelte-toast";

  export let data: any;
  let grid_data: any[] = [];
  export let val: any;
  let body = { path: val, data: data };
  const predict = async () => {
    try {
      const res = await post_data(
        `${baseApi}/model/predicts/`,
        $session.user.auth_token,
        body
      );
      const response = await res.json();
      grid_data = JSON.parse(response.detail.data);
      grid_data.map((e: any) => {
        e.kota = city[e.kota - 1];
      });
      grid_data.map((e: any) => {
        e.stasiun = stasiun[e.stasiun];
      });
    } catch (error) {
      toast.push("Something went wrong!");
      setTimeout((window.location.href = "/model/predicts"), 1000);
    }
  };
  onMount(() => {
    setTimeout(predict, 1500);
  });
  const columns = [
    {
      id: "tahun",
      name: "Tahun",
    },
    {
      id: "kota",
      name: "Kota",
    },
    {
      id: "result",
      name: "Prediction Result",
    },
  ];
</script>

<div class="flex flex-col justify-center w-full h-full items-center">
  {#if !grid_data.length}
    <progress class="progress w-56" />
  {:else}
    <div class="w-[60vw]">
      <div class="flex flex-row justify-between my-5">
        <article class="prose">
          <h1 class="">Prediction Result</h1>
        </article>
        <button class="btn btn-primary">Full Detail</button>
      </div>
      <Grid
        pagination={{ enabled: true, limit: 5 }}
        {columns}
        data={grid_data}
      />
    </div>
  {/if}
</div>
