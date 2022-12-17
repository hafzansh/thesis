<script lang="ts">
  import { send } from "../../../lib/shared/api";
  import { city, stasiun as sta } from "../../../lib/utils/constants";
  import Grid from "gridjs-svelte";
  import { typewriter } from "@comp/others/transition";
  import { html } from "gridjs";
  import type { Model_Type } from "../../../lib/utils/schema";
  import { toast } from "@zerodevx/svelte-toast";
  import PredictModal from "../../../lib/components/modals/predict/predict_modal.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let val: any = "Assets/This will be the name of model path";
  let body: any;
  let luas_panen: any,
    luas_lahan: any,
    suhu_min: any,
    suhu_max: any,
    suhu_avg: any,
    produktivitas: any,
    humidity_avg: any,
    curah_hujan: any,
    hari_hujan: any,
    penyinaran: any,
    tahun: any;
  let kota: number = 1;
  let kota2: any;
  let stasiun: number = 1;
  let stasiun2: any;
  const onchange = () => {
    kota2 = city[kota - 1];
  };
  const onchange2 = () => {
    stasiun2 = sta[stasiun];
  };
  let result = `Result         : ${body}`;
  async function submitForm(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    const response = await send(formEl);
    if (response.success) {
      body = response.success;
      const body_data = JSON.parse(body.detail.data);
      setTimeout(() => (show = !show), 1000);
      setTimeout(() => (show2 = !show2), 2000);
      setTimeout(() => (show3 = !show3), 3000);
      setTimeout(() => (show4 = !show4), 4000);
      return (result = `Result         : ${parseFloat(
        body_data[0].result
      ).toLocaleString("en")}`);
    }
    toast.push(response.error ? response.error : "");
  }
  let show: boolean = false;
  let show2: boolean = false;
  let show3: boolean = false;
  let show4: boolean = false;
  let data: Model_Type[] = [
    {
      id: 0,
      path: val,
      node: 0,
      loss: "0",
      mae: 0,
      size: "0",
      rate: 0,
      epoch: 0,
      result: "0",
    },
  ];
  const columns = [
    {
      name: "ID",
      id: "id",
      hidden: true,
    },
    {
      name: "Path",
      id: "path",
      width: "250px",
      formatter: (cell: any) =>
        html(`<p class="badge badge-secondary ">${cell}</p>`),
    },
    {
      name: "Nodes",
      id: "node",
    },
    {
      name: "MAE",
      id: "mae",
    },
    {
      name: "Learning Rate",
      id: "rate",
    },
    {
      name: "Test Size",
      id: "size",
    },
    {
      name: "Epoch",
      id: "epoch",
    },
  ];
  onMount(() => {
    let pog = [
      {
        kota: 1.0,
        tahun: 2000,
        luas_panen: 100.0,
        luas_lahan: 100.0,
        produktivitas: 100.0,
        stasiun: 1,
        suhu_min: 1.0,
        suhu_max: 1.0,
        suhu_avg: 1.0,
        humidity_avg: 50.0,
        curah_hujan: 100.0,
        hari_hujan: 1000.0,
        penyinaran: 100.0,
        result: 720568.0625,
      },
    ];
    console.log(pog);
  });
  let modal: boolean = false;
</script>

<!-- <article class="prose">
  <h1>Prediction</h1>
</article> -->
<PredictModal bind:values={modal} bind:val bind:data_binded={data} />
<div class="bg-slate-300 mockup-window">
  <div class="p-2" in:fade out:fade>
    <div class="flex flex-col">
      <div class="flex flex-row mt-5">
        <table class="table w-full border">
          <thead>
            <tr>
              <td>Model</td>
            </tr>
          </thead>
        </table>
        <button class="btn" on:click={() => (modal = !modal)}
          >Select Model</button
        >
      </div>
      <Grid {columns} {data} className={{ table: "w-full table" }} />
    </div>
    <form method="post" on:submit|preventDefault={submitForm}>
      <label class="input-group w-full mb-5 hidden">
        <span class="w-1/2">Model Path</span>
        <input
          type="text"
          bind:value={val}
          class="input input-bordered w-full text-right font-inter font-bold"
          name="path"
          id="path"
        />
        <button class="btn btn-primary">Select</button>
      </label>

      <div class="flex flex-row mt-5">
        <div class="w-8/12 mr-5">
          <table class="table w-full border">
            <thead class="border-b">
              <tr>
                <th class="w-2/12">Luas Panen</th>
                <th class="w-2/12">Luas Lahan</th>
                <th class="w-2/12">Produktivitas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={luas_panen}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="luas_panen"
                    id="luas_panen"
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={luas_lahan}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="luas_lahan"
                    id="luas_lahan"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={produktivitas}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="produktivitas"
                    id="produktivitas"
                    required
                  /></td
                >
              </tr>
            </tbody>
          </table>
          <table class="table w-full border mt-5">
            <thead>
              <tr>
                <th>Curah Hujan</th>
                <th>Hari Hujan</th>
                <th>Penyinaran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    class="input input-bordered w-full text-right font-inter font-bold"
                    bind:value={curah_hujan}
                    name="curah_hujan"
                    id="curah_hujan"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    class="input input-bordered w-full text-right font-inter font-bold"
                    bind:value={hari_hujan}
                    name="hari_hujan"
                    id="hari_hujan"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={penyinaran}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="penyinaran"
                    id="penyinaran"
                    required
                  /></td
                >
              </tr>
            </tbody>
          </table>
          <table class="table w-full border mt-5">
            <thead>
              <tr>
                <td class="w-4/12">Tahun</td>
                <td class="w-4/12">Kota</td>
                <td class="w-4/12">Stasiun</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  ><input
                    type="number"
                    bind:value={tahun}
                    min="2000"
                    max="2900"
                    step="1"
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="tahun"
                    id="tahun"
                    required
                  /></td
                >
                <td
                  ><select
                    class="input input-bordered w-full text-right font-inter font-bold"
                    id="kota"
                    name="kota"
                    bind:value={kota}
                    on:change={onchange}
                  >
                    <option value="1" selected>Tanah Laut</option>
                    <option value="2">Kotabaru</option>
                    <option value="3">Banjar</option>
                    <option value="4">Barito Kuala</option>
                    <option value="5">Tapin</option>
                    <option value="6">Hulu Sungai Selatan</option>
                    <option value="7">Hulu Sungai Tengah</option>
                    <option value="8">Hulu Sungai Utara</option>
                    <option value="9">Tabalong</option>
                    <option value="10">Tanah Bumbu</option>
                    <option value="11">Balangan</option>
                    <option value="12">Kota Banjarmasin</option>
                    <option value="13">Kota Banjarbaru</option>
                  </select></td
                >
                <td
                  ><select
                    class="input input-bordered w-full text-right font-inter font-bold"
                    id="stasiun"
                    name="stasiun"
                    bind:value={stasiun}
                    on:change={onchange2}
                  >
                    <option value="1" selected
                      >Stasiun Klimatologi Banjarbaru</option
                    >
                    <option value="2">Stasiun Meteorologi Syamsudin Noor</option
                    >
                    <option value="3"
                      >Stasiun Meteorologi Stagen Kotabaru</option
                    >
                  </select></td
                >
              </tr>
            </tbody>
          </table>
          <table class="table w-full border mt-5">
            <thead class="border-b">
              <tr>
                <th class="w-2/12">Humidity (Avg)</th>
                <th class="w-2/12">Suhu (Min)</th>
                <th class="w-2/12">Suhu (Max)</th>
                <th class="w-2/12">Suhu (Avg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    class="input input-bordered w-full text-right font-inter font-bold"
                    bind:value={humidity_avg}
                    name="humidity_avg"
                    id="humidity_avg"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={suhu_min}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="suhu_min"
                    id="suhu_min"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={suhu_max}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="suhu_max"
                    id="suhu_max"
                    required
                  /></td
                >
                <td>
                  <input
                    type="number"
                    step="0.01"
                    bind:value={suhu_avg}
                    class="input input-bordered w-full text-right font-inter font-bold"
                    name="suhu_avg"
                    id="suhu_avg"
                    required
                  /></td
                >
              </tr>
            </tbody>
          </table>
        </div>
        <div class="w-4/12">
          <div class="mockup-code bg-success h-[60vh] text-black">
            <pre data-prefix="1"><code
                >Luas Panen     : {luas_panen} (Hektar)</code
              ></pre>
            <pre data-prefix="2"><code
                >Luas Lahan     : {luas_lahan} (Hektar)</code
              ></pre>
            <pre data-prefix="3"><code
                >Suhu Min       : {suhu_min} (Celcius)</code
              ></pre>
            <pre data-prefix="4"><code
                >Suhu Max       : {suhu_max} (Celcius)</code
              ></pre>
            <pre data-prefix="5"><code
                >Suhu Avg       : {suhu_avg} (Celcius)</code
              ></pre>
            <pre data-prefix="6"><code>Humidity Avg   : {humidity_avg} (%)</code
              ></pre>
            <pre data-prefix="7"><code>Curah Hujan    : {curah_hujan} (mm)</code
              ></pre>
            <pre data-prefix="8"><code
                >Hari Hujan     : {hari_hujan} (Hari/tahun)</code
              ></pre>
            <pre data-prefix="9"><code>Penyinaran     : {penyinaran} (%)</code
              ></pre>
            <pre data-prefix="10"><code
                >Produktivitas  : {produktivitas} (%)</code
              ></pre>
            <pre data-prefix="11"><code>Kota           : {kota2}</code></pre>
            <pre data-prefix="12"><code>Stasiun        : {stasiun2}</code></pre>
            <pre data-prefix="13"><code>Tahun          : {tahun}</code></pre>
            <pre data-prefix="14"><code>Model path     : {val.slice(7)}</code
              ></pre>
            <div class="flex flex-col">
              {#if show}
                <div class="flex flex-row">
                  <pre data-prefix=">" class="text-warning" />
                  <code class="ml-[-20px]"
                    ><p transition:typewriter>
                      Sending Data to server...
                    </p></code
                  >
                </div>
              {/if}
              {#if show2}
                <div class="flex flex-row">
                  <pre data-prefix=">" class="text-warning" />
                  <code class="ml-[-20px]"
                    ><p transition:typewriter>Processing Data...</p></code
                  >
                </div>
              {/if}
              {#if show3}
                <div class="flex flex-row">
                  <pre data-prefix=">" class="text-success" />
                  <code class="ml-[-20px]"
                    ><p transition:typewriter>Done...</p></code
                  >
                </div>
              {/if}
              {#if show4}
                <div class="flex flex-row mb-10">
                  <pre
                    data-prefix=">"
                    class="bg-warning text-warning-content"
                  />
                  <code class="ml-[-20px] bg-warning text-warning- w-full"
                    ><b class="font-inter" transition:typewriter>{result}</b
                    ></code
                  >
                </div>
              {/if}
            </div>
            <button
              class="btn btn-warning absolute right-28 bottom-3 btn-sm"
              on:click={() => (window.location.href = "/model/predict")}
              >Clear</button
            >
            <button
              class="btn btn-info absolute right-3 bottom-3 btn-sm"
              type="submit">Confirm</button
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
