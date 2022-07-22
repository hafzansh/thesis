<script context="module">  
  import Bar from "svelte-chartjs/src/Bar.svelte";
  import { city} from "../../../../../lib/utils/constants";
  setTimeout(()=>window.print(),1000)

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
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
</script>
<div class="flex flex-col w-full h-full bg-white">
  
  <div class="flex flex-col bg-white">
    <div class="flex flex-col w-full h-full bg-white">
      <div
        class="w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"
      >
      <h1 class="font-inter font-bold text-[50px] justify-center">
        Prediction Data
      </h1>
        <Bar data={cdata} {options} />
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-end items-end w-full mt-10 ml-[-50px]">
    <i class="font-inter font-bold font-lg">{data[0].path}</i>
  </div>
</div>
