<script context="module">
  import { Bar } from "svelte-chartjs";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  Chart.register(
    ChartDataLabels,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  import { city } from "../../../../../lib/utils/constants";
  import Logo from "../../../../../lib/components/layouts/partials/Logo.svelte";
  setTimeout(() => window.print(), 1000);
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
  let options = {
    responsive: true,
  };
</script>

<div class="flex flex-col w-full h-full bg-white">
  <div class="flex flex-row w-full">
    <Logo title="Prediction Data" />
  </div>
  <div class="flex flex-row justify-end items-center w-full mt-[-25px]">
    <article class="prose">
      <h3>{data[0].path}</h3>
    </article>
  </div>
  <div class="flex flex-col bg-white">
    <div class="flex flex-col w-full h-full bg-white">
      <div
        class="w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"
      >
        <Bar data={cdata} {options} />
      </div>
    </div>
  </div>
</div>
