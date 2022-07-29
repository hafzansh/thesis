<script context="module">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import {
    faArrowCircleLeft,
    faPrint,
  } from "@fortawesome/free-solid-svg-icons";
  import { Bar } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  Chart.register(
    ChartDataLabels,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  import Fa from "svelte-fa";
  import { city, stasiun } from "../../../../lib/utils/constants";
</script>

<script lang="ts">
  export let data: any;
  const raw_data = JSON.parse(data[0].data);
  const table_data = JSON.parse(data[0].data);
  table_data.map((e: any) => {
    e.kota = city[e.kota - 1];
  });
  raw_data.map((e: any) => {
    e.kota = city[e.kota - 1];
  });
  const data_city = raw_data.map(
    (c: any) =>
      (c.kota = `${c.kota} (${c.tahun}) - ${parseFloat(c.result).toLocaleString(
        "en"
      )}`)
  );
  const data_result = raw_data.map((c: any) => c.result);
  const cdata = {
    labels: data_city,

    datasets: [
      {
        label: "Result",
        data: data_result,
        backgroundColor: ["rgba(255, 134,159,0.4)"],
        borderWidth: 2,
        borderColor: ["rgba(255, 134, 159, 1)"],
      },
    ],
  };
  type anchor= '"center"' | '"end"' | '"start"'  
  let options = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: "center"
      },
    },
  };
  const path_chart = `${$page.url.pathname}/print_chart`;
  const path_table = `${$page.url.pathname}/print_table`;
</script>

<div
  class="stats bg-neutral text-white shadow flex flex-row justify-start items-start mb-5"
>
  <button
    on:click={() => goto("/model/prediction")}
    class="stat place-items-center"
  >
    <div class="stat-title">Back</div>
    <div class="btn text-white stat-value">
      <Fa icon={faArrowCircleLeft} />
    </div></button
  >
  <div class="stat place-items-center">
    <div class="stat-title" />
    <div class="stat-value" />
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Model</div>
    <div class="stat-value">Prediction Result</div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title" />
    <div class="stat-value" />
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Print</div>
    <div class="flex flex-row justify-center gap-2">
      <button
        on:click={() => window.open(path_chart)}
        class="flex flex-col justify-center items-center"
      >
        <div class="stat-value text-white mb-1 mt-1 text-[25px]">
          <Fa icon={faPrint} />
        </div>
        <div class="stat-description badge badge-outline">Chart</div>
      </button>
      <button
        on:click={() => window.open(path_table)}
        class="flex flex-col justify-center items-center"
      >
        <div class="stat-value text-white mb-1 mt-1 text-[25px]">
          <Fa icon={faPrint} />
        </div>
        <div class="stat-description badge badge-outline">Table</div>
      </button>
    </div>
  </div>
</div>
<div class="flex flex-col">
  <div class="flex flex-col w-full">
    <div
      class="w-full flex flex-col bg-base-200 justify-center items-center rounded-lg p-10"
    >
    
      <Bar data={cdata} {options} />
    </div>
  </div>
</div>
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
