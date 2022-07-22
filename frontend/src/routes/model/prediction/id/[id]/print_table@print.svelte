<script context="module">
  import { city, stasiun } from "../../../../../lib/utils/constants";
  setTimeout(()=>window.print(),1000)

</script>

<script lang="ts">
  export let data: any;
  const table_data = JSON.parse(data[0].data);
  table_data.map((e: any) => {
    e.kota = city[e.kota - 1];
  });
</script>

<div class="overflow-x-auto flex flex-col justify-center items-center my-5">
  <h1 class="font-inter font-bold text-lg justify-center mb-5">
    Parameter Data and Result
  </h1>
  <table class="table table-compact w-full rounded">
    <thead>
      <tr>
        <th>No</th>
        <th>Tahun</th>
        <th>Kota</th>
        <th>Luas Lahan</th>
        <th>Luas Panen</th>
        <th>Produktivitas</th>
        <th>Hasil Prediksi</th>
      </tr>
    </thead>
    <tbody>
      {#each table_data as lbl, i}
        <tr>
          <th>{i + 1}</th>
          <td>{table_data[i].tahun}</td>
          <td>{table_data[i].kota}</td>
          <td>{table_data[i].luas_lahan}</td>
          <td>{table_data[i].luas_panen}</td>
          <td>{table_data[i].produktivitas}</td>
          <td>{parseFloat(table_data[i].result).toLocaleString("en")}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div class="overflow-x-auto flex flex-col justify-center items-center my-5">
  <h1 class="font-inter font-bold text-lg justify-center mb-5">
    Parameter Iklim
  </h1>
  <table class="table table-compact w-full rounded">
    <thead>
      <tr>
        <th>No</th>
        <th>Tahun</th>
        <th>Stasiun</th>
        <th>Suhu (Min)</th>
        <th>Suhu (Max)</th>
        <th>Suhu (Avg)</th>
        <th>Humidity (Avg)</th>
        <th>Curah Hujan </th>
        <th>Hari Hujan</th>
        <th>Penyinaran</th>
      </tr>
    </thead>
    <tbody>
      {#each table_data as lbl, i}
        <tr>
          <th>{i + 1}</th>
          <td>{table_data[i].tahun}</td>
          <td>{stasiun[table_data[i].stasiun]}</td>
          <td>{table_data[i].suhu_min}</td>
          <td>{table_data[i].suhu_max}</td>
          <td>{table_data[i].suhu_avg}</td>
          <td>{table_data[i].humidity_avg}</td>
          <td>{table_data[i].curah_hujan}</td>
          <td>{table_data[i].hari_hujan}</td>
          <td>{table_data[i].penyinaran}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div class="flex flex-col justify-end items-end w-full mt-10 ml-[-50px]">
    <i class="font-inter font-bold font-lg">{data[0].path}</i>
</div>