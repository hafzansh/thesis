<script lang="ts">
  
  let steps = 1;
  let next = true;
  let prev = false;
  let data: any[] = [];
  let data2: any[] = [];
  let file: any;
  let val: any;
  let data_binded: Model_Type[] = [];

  import { slide,fly } from "svelte/transition";
  import Model from "../../../lib/components/layouts/predicts/model.svelte";
  import CSVTable from "../../../lib/components/layouts/predicts/table.svelte";
  import Upload from "../../../lib/components/layouts/predicts/upload.svelte";
  import SendPredict from "../../../lib/components/layouts/predicts/send_predict.svelte";
  import { city } from "../../../lib/utils/constants";
  import type { Model_Type } from "../../../lib/utils/schema";
  export const stasiun: Array<string> = [
    "Stasiun Klimatologi Banjarbaru",
    "Stasiun Meteorologi Syamsudin Noor",
    "Stasiun Meteorologi Stagen Kotabaru",
  ];
  const change = (bool: boolean) => {
    if (bool) {
      prev = true;
      steps++;
      if (!file){
        next=false
      }
      if (!val){
        next=false
      }
      if (steps >= 4) {
        steps = 4;
        next = false;
        prev = false
      }
    } else {
      next = true;
      steps--;
      if (steps <= 1) {
        steps = 1;
        prev = false;
      }
    }
  };
</script>

<div class="mockup-window border bg-slate-300 h-[85vh]">
  <div class="bg-slate-200 flex flex-row h-full w-full">
    <div class="w-10/12 h-[75vh]" in:fly={{ x: 500, duration: 1000 }}>
      {#if steps == 1}
        <div transition:slide class=" m-5 h-full rounded-lg">
          <div class="flex flex-col justify-center items-center w-full h-full">
            <article class="prose mx-10 items-start">
              <h1 class="">CSV Column Format</h1>
              <p />
              <!-- ... -->
            </article>
            <div class="flex flex-row">
              <div class="flex flex-col">
                <article class="prose mx-10 mb-5  items-start">
                  <h2 class=""># Example</h2>
                  <!-- ... -->
                </article>
                <img
                  src="/images/csv_data_format.png"
                  alt="Data format for CSV"
                  class="h-max rounded mx-10"
                />
                <article class="prose mx-10 mt-5  items-start">
                  <h2 class=""># Format Stasiun</h2>
                  <!-- ... -->
                </article>
                <table class="table table-compact mx-10 mt-5">
                  <thead>
                    <tr>
                      <td>Stasiun</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    {#each stasiun as sta, i}
                      <tr>
                        <td>{sta}</td>
                        <td>{i + 1}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
              <div class="flex flex-col">
                <article class="prose mb-5  items-start">
                  <h2 class=""># Format Kota</h2>
                  <!-- ... -->
                </article>
                <table class="table table-compact">
                  <thead>
                    <tr>
                      <td>Description</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    {#each city as ct, i}
                      <tr>
                        <td>{ct}</td>
                        <td>{i + 1}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      {/if}
      {#if steps == 2}
        <div transition:slide class=" m-5 h-full rounded-lg">
          <div class="flex text-slate-300 justify-center items-center h-full">
            {#if !file}
              <Upload bind:next bind:file bind:data/>
            {/if}
            {#if file}
              <CSVTable bind:data />
            {/if}
          </div>
        </div>
      {/if}
      {#if steps == 3}
        <div transition:slide class=" m-5 h-full rounded-lg">
          <Model bind:next bind:val bind:data_binded />
        </div>
      {/if}
      {#if steps == 4}
        <div transition:slide class="m-5 h-full rounded-lg">
          <SendPredict bind:val bind:data />
        </div>
      {/if}
    </div>
    <div class="flex flex-col items-end justify-center ml-10">
      <button
        class="btn btn-secondary w-full"        
        on:click={()=>window.location.href='/model/predicts'}>Reset</button
      >
      
      <ul class="steps steps-vertical mr-10">
        <li class="step {steps > 0 ? 'step-primary' : ''}">CSV Format</li>
        <li class="step {steps > 1 ? 'step-primary' : ''}">Upload CSV</li>
        <li class="step {steps > 2 ? 'step-primary' : ''}">Select Model</li>
        <li class="step {steps > 3 ? 'step-primary' : ''}">Predict</li>
      </ul>
      <div class="btn-group w-full">

        <button
          class="btn btn-primary w-1/2"
          disabled={!prev}
          on:click={() => change(false)}>Back</button
        >
        <button
          class="btn btn-primary w-1/2"
          disabled={!next}
          on:click={() => change(true)}>Next</button
        >
      </div>
    </div>
  </div>
</div>
