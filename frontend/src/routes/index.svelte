<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import WelcomeBanner from "../lib/components/layouts/partials/WelcomeBanner.svelte";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte/internal";
  import { themeChange } from "theme-change";
</script>

<script lang="ts">
  export const load: Load = ({ session }) => {
    if (!session.user.authenticated) {
      return {
        status: 302,
        redirect: "/login",
      };
    }

    return {
      status: 200,
      props: {
        user: session.user,
      },
    };
  };
  onMount(() => {
    themeChange(false);
  });
  export let data_padi;
  export let data_iklim;
  import Line from "svelte-chartjs/src/Line.svelte";
  import { city } from "../lib/utils/constants";
  let padi_labels: any;
  let padi_produksi = data_padi.map((c: any) => c.produksi);
  let iklim_labels = data_iklim.map((c: any) => c.tahun);
  let iklim_suhu_min = data_iklim.map((c: any) => c.suhu_min);
  let iklim_suhu_max = data_iklim.map((c: any) => c.suhu_max);
  let iklim_suhu_avg = data_iklim.map((c: any) => c.suhu_avg);
  let iklim_humid_avg = data_iklim.map((c: any) => c.humidity_avg);
  let padi_kota = data_padi.map((c: any) => `${city[c.kota - 1]} (${c.tahun})`);

  let chart_padi = {
    labels: padi_kota,
    datasets: [
      {
        label: "Produksi",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",

        data: padi_produksi,
      },
    ],
  };
  let chart_suhu_min = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",

        data: iklim_suhu_min,
      },
    ],
  };
  let chart_suhu_max = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",

        data: iklim_suhu_max,
      },
    ],
  };
  let chart_suhu_avg = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",

        data: iklim_suhu_avg,
      },
    ],
  };
  let chart_humid_avg = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",

        data: iklim_humid_avg,
      },
    ],
  };
</script>

<div in:fade out:fade />
<WelcomeBanner />
<div class="grid grid-cols-4 gap-5 mb-12">
  <div class="card bg-base-100 shadow-xl col-span-2 row-span-2">
    <div class="card-body">
      <h2 class="card-title">Data Padi</h2>
      <figure>
        <Line
          data={chart_padi}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </figure>
    </div>
  </div>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Suhu (Average)</h2>
      <figure>
        <Line
          data={chart_suhu_avg}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </figure>
    </div>
  </div>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Suhu (Maximal)</h2>
      <figure>
        <Line
          data={chart_suhu_max}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </figure>
    </div>
  </div>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Suhu (Min)</h2>
      <figure>
        <Line
          data={chart_suhu_min}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </figure>
    </div>
  </div>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Humidity (Average)</h2>
      <figure>
        <Line
          data={chart_humid_avg}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </figure>
    </div>
  </div>
  
      <div class="stats stats-vertical bg-primary text-primary-content">
        <div class="stat">
          <div class="stat-title">Themes</div>
          <div class="stat-value">Change Theme</div>
          <div class="stat-actions">
            <button
              in:fly={{ y: 200, duration: 500 }}
              data-set-theme="autumn"
              class="btn btn-accent btn-sm"
              data-act-class="ACTIVECLASS">Autumn</button
            >
            <button
              in:fly={{ y: 200, duration: 1000 }}
              data-set-theme="cupcake"
              class="btn btn-secondary btn-sm"
              data-act-class="ACTIVECLASS">Cupcake</button
            >
            <button
              in:fly={{ y: 200, duration: 1500 }}
              data-set-theme="pastel"
              class="btn btn-neutral btn-sm"
              data-act-class="ACTIVECLASS">Pastel</button
            >
          </div>
        </div>
      
  </div>
</div>
