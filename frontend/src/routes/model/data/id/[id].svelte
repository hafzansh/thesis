<script context="module">
  import { Line } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from "chart.js";
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
  import { baseApi, city } from "@utils/constants";
  import { fade, fly } from "svelte/transition";
</script>

<script lang="ts">
  import type { Model_Loss, Model_Result, Model_Type } from "@utils/schema";
  import { goto } from "$app/navigation";
  import Fa from "svelte-fa";
  import {
    faArrowCircleLeft,
    faPrint,
    faShare,
  } from "@fortawesome/free-solid-svg-icons";
  import { page, session } from "$app/stores";
  import { onMount } from "svelte";
  import { post_data } from "../../../../lib/shared/api";
import { toast } from "@zerodevx/svelte-toast";
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
    plugins: {
      datalabels: {
        display: false,
      },
    },
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
  const path_chart = `${$page.url.pathname}/print_chart`;
  const path_table = `${$page.url.pathname}/print_table`;
  let ready = false;
  onMount(() => {
    ready = true;
  });
  let form_modal = "1";
  let target_mail:any
  function onChange(event: Event) {
    form_modal = event.currentTarget.value || "1";
  }
  const post_email = async (id: any, target: string) => {
    const res = await post_data(`${baseApi}/mail/send_model`, $session.user.auth_token, {
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
      post_form(pog.id,"bps6300@bps.go.id")

    }
    else if (form_modal == "2") {      
      post_form(pog.id,"dipertakalsel@gmail.com")
    }
    else if (form_modal == "3") {      
      post_form(pog.id,target_mail)
    }
  };
</script>

{#if ready}
  {#if !pog.error}
    <div in:fly={{ y: 500, duration: 1500 }} out:fade id="capture">
      <div
        class="stats bg-neutral text-white shadow flex flex-row justify-start items-start mb-5"
      >
        <button
          on:click={() => goto("/model/data")}
          class="stat place-items-center"
        >
          <div class="stat-title">Back</div>
          <div class="btn text-white stat-value">
            <Fa icon={faArrowCircleLeft} />
          </div></button
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
        <div class="stat place-items-center">
          <div class="stat-title">Action</div>
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
            <h1 class="font-inter font-bold text-lg justify-center">
              Data Comparison
            </h1>
            <Line
              data={data_result}
              options={{ chart_scales1, ...chart_options }}
            />
          </div>
          <div
            class="w-full flex flex-col bg-base-200 justify-center items-center rounded-lg p-10 my-5"
          >
            <h1 class="font-inter font-bold text-lg justify-center">Loss</h1>
            <Line
              data={data_loss}
              options={{ chart_scales2, ...chart_options, ...chart_title2 }}
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-x-auto flex flex-col justify-center items-center mb-5"
      >
        <h1 class="font-inter font-bold text-lg justify-center mb-5">
          MEAN ABSOLUTE ERROR
        </h1>
        <table class="table table-compact w-full rounded">
          <thead>
            <tr>
              <th>No</th>
              <th>City (Year)</th>
              <th>Test Data</th>
              <th>Prediction</th>
              <th>Mean Absolute Error</th>
            </tr>
          </thead>
          <tbody>
            {#each chart_result_label as lbl, i}
              <tr>
                <th>{i + 1}</th>
                <td>{lbl}</td>
                <td>{chart_data1[i]}</td>
                <td>{chart_data2[i]}</td>
                <td>{mae_data[i]}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
{/if}
