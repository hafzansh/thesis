<script context="module">
  import {fade} from "svelte/transition"
  import { goto } from "$app/navigation";
  import { page, session } from "$app/stores";
  import {
    faArrowCircleLeft,
    faPrint,
faShare,
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
  import { baseApi, city, stasiun } from "../../../../lib/utils/constants";
import { post_data } from "../../../../lib/shared/api";
import { toast } from "@zerodevx/svelte-toast";
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
  let form_modal = "1";
  let target_mail:any
  function onChange(event: Event) {
    form_modal = event.currentTarget.value || "1";
  }
  const post_email = async (id: any, target: string) => {
    const res = await post_data(`${baseApi}/mail/send_prediction`, $session.user.auth_token, {
        id: id,
        email: target,
      })
    return await res.json()
  };
  const post_form=(id: any, target: string)=>{
    toast.push(`Sending Email...`)
      window.location.href = '#'      
      let a = post_email(id,target).then(a=>{
        if (a.link) return toast.push('Email has been sent')
        return toast.push(a.detail.msg)
      })      
  }
  const submit_mail = () => {
    if (form_modal == "1") {      
      post_form(data[0].id,"bps6300@bps.go.id")
    }
    else if (form_modal == "2") {      
      post_form(data[0].id,"dipertakalsel@gmail.com")
    }
    else if (form_modal == "3") {      
      post_form(data[0].id,target_mail)      
    }
  };
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
      <a
      href="#send-mail"
      class="flex flex-col justify-center items-center"
    >
      <div class="stat-value text-white mb-1 mt-1 text-[25px]">
        <Fa icon={faShare} />
      </div>
      <div class="stat-description badge badge-outline">Share</div>
    </a>
    <!-- <input bind:value={values}
    bind:checked={values} type="checkbox" id="my-modal" class="modal-toggle" /> -->
    <div class="modal" id="send-mail">
      <div class="modal-box max-w-md">
        <form method="post" on:submit|preventDefault={submit_mail}>
          <h3 class="font-bold text-lg text-base-content">
            Kirim hasil model ini kepada :
          </h3>
          <div class="flex flex-col gap-4 mt-5">
            <div class="form-control">
              <label class="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-6"
                  class="radio {form_modal === '1'
                    ? 'radio-primary'
                    : ''}"
                  value="1"
                  on:change={onChange}
                  bind:group={form_modal}
                  checked={form_modal == "1"}
                />
                <span
                  class="label-text btn {form_modal === '1'
                    ? 'btn-primary'
                    : ''} text-white w-80"
                  >Badan Pusat Statistik Kal-Sel</span
                >
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-6"
                  class="radio {form_modal === '2'
                    ? 'radio-primary'
                    : ''}"
                  value="2"
                  on:change={onChange}
                  bind:group={form_modal}
                  checked={form_modal == "2"}
                />
                <span
                  class="label-text btn {form_modal === '2'
                    ? 'btn-primary'
                    : ''} text-white w-80"
                  >Dinas Tanaman Pangan Kal-Sel</span
                >
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-6"
                  class="radio {form_modal === '3'
                    ? 'radio-primary'
                    : ''}"
                  value="3"
                  on:change={onChange}
                  bind:group={form_modal}
                  checked={form_modal == "3"}
                />
                <span
                  class="label-text btn {form_modal === '3'
                    ? 'btn-primary'
                    : ''} text-white w-80">Custom</span
                >
              </label>
            </div>

            {#if form_modal == "3"}
              <div class="form-control w-full" in:fade out:fade>
                <label class="label" for="">
                  <span class="label-text"
                    >Masukkan Alamat E-Mail Tujuan</span
                  >
                </label>
                <input
                  type="email"
                  id="custom_email"
                  placeholder="jst.padi@gmail.com"
                  class="input input-bordered w-full text-black"
                  bind:value={target_mail}
                  required
                />
              </div>
            {/if}
          </div>
          <div class="modal-action">
            <a href="#"  class="btn">Cancel</a>
            <button class="btn btn-primary" type="submit">
              Send</button
            >
          </div>
        </form>
      </div>
    </div>
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
