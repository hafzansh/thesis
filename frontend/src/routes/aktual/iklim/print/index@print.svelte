<script lang="ts">
import Logo from "../../../../lib/components/layouts/partials/Logo.svelte";

  import type { Iklim } from "../../../../lib/utils/schema";

  setTimeout(() => window.print(), 1000);

  export let data: Array<Iklim>;
</script>

<div class="p-0 flex flex-col items-end justify-end w-full h-full bg-white">
  <div class="flex flex-row w-full">
    <Logo title="Data Iklim" />
  </div>
  <div class="bg-white w-full h-full">
    <table class="table table-compact w-full rounded bg-white">      
      <tbody>
        <tr>
          <th>No</th>
          <th>Tahun</th>
          <th>Stasiun</th>
          <th>Suhu (Min)</th>
          <th>Suhu (Max)</th>
          <th>Suhu (Avg)</th>
          <th>Humidity (Avg)</th>
          <th>Curah Hujan</th>
          <th>Hari Hujan</th>
          <th>Penyinaran</th>
        </tr>
        {#each data as lbl, i}
          <tr>
            <th>{i + 1}</th>
            <th>{data[i].tahun}</th>
            <th>{data[i].stasiun}</th>
            <th>{data[i].suhu_min}</th>
            <th>{data[i].suhu_max}</th>
            <th>{data[i].suhu_avg}</th>
            <th>{data[i].humidity_avg}</th>
            <th>{data[i].curah_hujan}</th>
            <th>{data[i].hari_hujan}</th>
            <th>{data[i].penyinaran}</th>
          </tr>
        {/each}
      </tbody>
      <!-- <tfoot class="my-5">
        <tr>
          <th>No</th>
          <th>Tahun</th>
          <th>Stasiun</th>
          <th>Suhu (Min)</th>
          <th>Suhu (Max)</th>
          <th>Suhu (Avg)</th>
          <th>Humidity (Avg)</th>
          <th>Curah Hujan</th>
          <th>Hari Hujan</th>
          <th>Penyinaran</th>
        </tr>
      </tfoot> -->
    </table>
  </div>
</div>
