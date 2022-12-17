<script lang="ts">
  import Grid from "gridjs-svelte";
  import { city, stasiun } from "../../../utils/constants";
  export let data: any[] = [];
  // const pog:any[] = [...data2];
  // let a:any[] = []
  // a = pog.map((e: any) => {
  //   e.kota = city[e.kota - 1];
  // });
  // a = pog.map((e: any) => {
  //   e.stasiun = stasiun[e.stasiun];
  // });
</script>

<div class="flex flex-col w-full h-full justify-center text-xs">
  <article class="prose mx-10 mb-5 justify-center w-full">
    <h1 class="">Preview Data</h1>
    <!-- ... -->
  </article>
  <div class="mx-10">
    <Grid
      pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
      data={data}
    />
  </div>
</div>
