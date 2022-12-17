<script context="module">
    import { Line } from 'svelte-chartjs'
import 'chart.js/auto';
    import { city } from "@utils/constants";
    setTimeout(()=>window.print(),1000)
  </script>
  
  <script lang="ts">
    import type {
      Model_Loss,
      Model_Result,
      Model_Type,
    } from "@utils/schema";
  import { goto } from "$app/navigation";
import Logo from '../../../../../lib/components/layouts/partials/Logo.svelte';
    export let data: any;
    const pog: Model_Type = data;
    if(pog.error){
      goto('/model/data')
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

    const test_size = `${Math.round(parseFloat(pog.size)*100)}%`    
  </script>
  {#if !pog.error}
  <div class="overflow-hidden p-3 bg-white" id="capture" >
    <div class="flex flex-row w-full">
      <Logo title="Model Data"  />
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
        <div class="stat lg:divider-vertical"></div>
        <div class="stat place-items-center">
          <div class="stat-title">Mean Absolute Error</div>
          <div class="stat-value">{pog.mae}</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Nodes</div>
          <div class="stat-value">{pog.node}</div>
      </div>
    </div>   
    <div class="overflow-x-auto mb-5 mt-16">
      <table class="table table-compact w-full rounded">
        <thead>
        </thead> 
        <tbody>
          <tr>
            <th>No</th> 
            <th>City (Year)</th> 
            <th>Test Data</th> 
            <th>Prediction</th> 
            <th>Mean Absolute Error</th> 
          </tr>
          {#each chart_result_label as lbl,i}
          <tr>
            <th>{i+1}</th> 
            <td>{lbl}</td> 
            <td>{chart_data1[i]}</td> 
            <td>{chart_data2[i]}</td> 
            <td>{mae_data[i]}</td>           
          </tr>
          {/each}
          <tr>
            <th></th> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td>{pog.mae}</td>           
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </div>
  </div>
  {/if}