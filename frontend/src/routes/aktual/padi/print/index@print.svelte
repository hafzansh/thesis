<script lang="ts">
  import type { Padi } from "../../../../lib/utils/schema";
  import Logo from "@comp/layouts/partials/Logo.svelte"
  setTimeout(() => window.print(), 1000);

  export let data: Array<Padi>;
  console.log(data[0].kota);
</script>

<div class="p-0 flex flex-col items-end justify-end w-full h-full bg-base-100">
  <div class="flex flex-row w-full">
      <Logo title="Data Padi" />      
  </div>
  <div class="bg-white w-full h-full">    
    <table class="table table-compact w-full rounded bg-white">      
      <tbody>
        <tr class="bg-base-300">
          <th>No</th>
          <th>Tahun</th>
          <th>Kota</th>
          <th>Luas Lahan</th>
          <th>Luas Panen</th>
          <th>Produktivitas</th>
          <th>Produksi</th>
        </tr>
        {#each data as lbl, i}
          <tr>
            <th>{i + 1}</th>
            <th>{data[i].tahun}</th>
            <th>{data[i].kota}</th>
            <th>{data[i].luas_lahan}</th>
            <th>{data[i].luas_panen}</th>
            <th>{data[i].produktivitas}</th>
            <th>{data[i].produksi}</th>
          </tr>
        {/each}
      </tbody>
      <!-- <tfoot class="my-5">
        <tr>
          <th>No</th>
          <th>Tahun</th>
          <th>Kota</th>
          <th>Luas Lahan</th>
          <th>Luas Panen</th>
          <th>Produktivitas</th>
          <th>Produksi</th>
        </tr>
      </tfoot> -->
    </table>
  </div>
</div>
