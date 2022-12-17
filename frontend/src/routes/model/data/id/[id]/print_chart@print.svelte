<script context="module">
  import { Line } from "svelte-chartjs";
  import "chart.js/auto";
  import { city } from "@utils/constants";
  setTimeout(() => window.print(), 1000);
</script>

<script lang="ts">
  import type { Model_Loss, Model_Result, Model_Type } from "@utils/schema";
  import { goto } from "$app/navigation";
  import Logo from "../../../../../lib/components/layouts/partials/Logo.svelte";
  export let data: any;
  const pog: Model_Type = data;
  if (pog.error) {
    goto("/model/data");
  }
  const loss: Model_Loss[] = JSON.parse(pog.loss);
  const chart_loss_label = Array.from(
    { length: pog.epoch },
    (_, i) => `Epoch-${i + 1}`
  );
  const chart_data_loss1 = loss.map((c) => c.loss);
  const chart_data_loss2 = loss.map((c) => c.val_loss);
  const result: Model_Result[] = JSON.parse(pog.result);
  const chart_result_label = result.map(
    (c) => `${city[c.City - 1]} (${c.Year})`
  );
  const chart_data1 = result.map((c) => c["Test Data"]);
  const chart_data2 = result.map((c) => c.Prediction);
  const mae_data = result.map((c) => c.MAE);

  const chart_options = {
    title: {
      display: true,
      text: "Chart Title",
      padding: {
        top: 10,
        bottom: 30,
      },
    },
    responsive: true,
  };
  const chart_scales1 = {
    scales: {
      y: {
        min: -3,
        max: 3,
      },
    },
  };
  const chart_title2 = {
    title: {
      display: true,
      text: "Chart Title",
    },
  };
  const chart_scales2 = {
    scales: {
      y: {
        min: 0,
        max: 2,
      },
    },
  };

  let data_result = {
    labels: chart_result_label,
    datasets: [
      {
        label: "Prediction",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data2,
      },
      {
        label: "Test Data",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data1,
      },
    ],
  };
  let data_loss = {
    labels: chart_loss_label,
    datasets: [
      {
        label: "Training Loss",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [1],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data_loss1,
      },
      {
        label: "Validation Loss",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data_loss2,
      },
    ],
  };
  const test_size = `${Math.round(parseFloat(pog.size) * 100)}%`;
</script>

{#if !pog.error}
  <div class="overflow-hidden p-3 bg-white" id="capture">
    <div class="flex flex-row w-full">
      <Logo title="Model Data" />
    </div>
    <div class="flex flex-row justify-end items-center w-full mt-[-25px]">
      <article class="prose">
        <h3>&nbsp;{pog.path}</h3>
      </article>
    </div>
    <div
      class="stats bg-white text-black flex flex-row justify-start items-start mb-5"
    >
      <div class="stat place-items-center">
        <div class="stat-title">Learning Rate</div>
        <div class="stat-value">{pog.rate}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Test Size</div>
        <div class="stat-value">{test_size}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Epoch</div>
        <div class="stat-value">{chart_data_loss1.length}/{pog.epoch}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Mean Absolute Error</div>
        <div class="stat-value">{pog.mae}</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Nodes</div>
        <div class="stat-value">{pog.node}</div>
      </div>
    </div>
    <div class="flex flex-col bg-white mt-[-10px]">
      <div class="flex flex-col w-full">
        <div
          class="w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"
        >
          <h1 class="font-inter font-bold text-[50px] justify-center">
            Data Comparison
          </h1>
          <Line
            data={data_result}
            options={{ chart_scales1, ...chart_options }}
          />
        </div>
        <div
          class="w-full flex flex-col bg-white justify-center items-center rounded-lg p-10 mt-[100px]"
        >
          <h1 class="font-inter font-bold text-[50px] justify-center">Loss</h1>
          <Line
            data={data_loss}
            options={{ chart_scales2, ...chart_options, ...chart_title2 }}
          />
        </div>
      </div>
    </div>
  </div>
{/if}
