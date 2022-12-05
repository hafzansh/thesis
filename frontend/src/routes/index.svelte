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
  let a:any
  let ready=false
  onMount(async () => {
    themeChange(false);
    a = await get_data(`${baseApi}/model`,$session.user.auth_token).then(a=>a.json())
    a.sort((a:any,b:any)=> Number(a.mae) - Number(b.mae))    
    console.log(a[0])
    ready=true
  });
  export let data_padi;
  export let data_iklim;
  import { Line } from 'svelte-chartjs'
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';
  import ChartDataLabels from "chartjs-plugin-datalabels";

  ChartJS.register(
    ChartDataLabels,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
  import { baseApi, city } from "../lib/utils/constants";
import { get_data } from "../lib/shared/api";
import { session } from "$app/stores";
import { goto } from "$app/navigation";
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
  let chart_options = {
    responsive: true,
    plugins: {
      datalabels:{
        display:false
      },
      legend: { display: false } 
    }
  }
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
          options={chart_options}
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
          options={chart_options}
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
          options={chart_options}
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
          options={chart_options}
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
          options={chart_options}
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
  {#if ready}
      <div class="stats stats-vertical bg-primary text-primary-content">
        <div class="stat">
          <div class="stat-title">Best Model #1</div>
          
          <div class="stat-value">MAE {a[0].mae}</div>
          
          <div class="stat-actions">
            <button
              in:fly={{ y: 200, duration: 500 }}              
              class="btn btn-accent btn-sm"
              >LSize : {a[0].size*100 }%</button
            >
            <button
              in:fly={{ y: 200, duration: 1000 }}              
              class="btn btn-secondary btn-sm"
              >Nodes : {a[0].node }</button
            >            
            <button
              in:fly={{ y: 200, duration: 1500 }}
              
              class="btn btn-neutral btn-sm"
              
              ><a href="/model/data/id/{a[0].id}">
                Details
              </a>
              </button
            >
          </div>
        </div>        
      </div>
      <div class="stats stats-vertical bg-primary text-primary-content">
        <div class="stat">
          <div class="stat-title">Best Model #2</div>
          
          <div class="stat-value">MAE {a[1].mae}</div>
          
          <div class="stat-actions">
            <button
              in:fly={{ y: 200, duration: 500 }}              
              class="btn btn-accent btn-sm"
              >LSize : {a[1].size*100 }%</button
            >
            <button
              in:fly={{ y: 200, duration: 1000 }}              
              class="btn btn-secondary btn-sm"
              >Nodes : {a[1].node }</button
            >            
            <button
              in:fly={{ y: 200, duration: 1500 }}
              
              class="btn btn-neutral btn-sm"
              ><a href="/model/data/id/{a[1].id}">
                Details
              </a>
              </button
            >
          </div>
        </div>        
      </div>
      <div class="stats stats-vertical bg-primary text-primary-content">
        <div class="stat">
          <div class="stat-title">Best Model #3</div>
          
          <div class="stat-value">MAE {a[2].mae}</div>
          
          <div class="stat-actions">
            <button
              in:fly={{ y: 200, duration: 500 }}              
              class="btn btn-accent btn-sm"
              >LSize : {a[2].size*100 }%</button
            >
            <button
              in:fly={{ y: 200, duration: 1000 }}              
              class="btn btn-secondary btn-sm"
              >Nodes : {a[2].node }</button
            >            
            <button
              in:fly={{ y: 200, duration: 1500 }}
              
              class="btn btn-neutral btn-sm"
              ><a href="/model/data/id/{a[2].id}">
                Details
              </a>
              </button
            >
          </div>
        </div>        
      </div>
      {/if}
  
</div>
