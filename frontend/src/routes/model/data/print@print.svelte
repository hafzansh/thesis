<script lang="ts">
import Logo from "../../../lib/components/layouts/partials/Logo.svelte";

import type { Model_Type } from "../../../lib/utils/schema";

setTimeout(()=>window.print(),1000)

export let data:Array<Model_Type>
console.log(data[0].mae)
</script>


<div class="p-0 flex flex-col items-end justify-end w-full h-full bg-white">
  <div class="flex flex-row w-full">
    <Logo title="List Model Data" />
  </div>
    <div class="bg-white w-full h-full">
        <table class="table table-compact w-full rounded bg-white">
          <thead>
        </thead> 
        <tbody>
              <tr>
                <th>No</th> 
                <th>Path</th> 
                <th>Epoch</th> 
                <th>Test Size</th> 
                <th>Learning Rate</th> 
                <th>Nodes</th> 
                <th>MAE</th> 
              </tr>
            {#each data as lbl,i}
            <tr>
              <th>{i+1}</th> 
              <th>{data[i].path}</th> 
              <th>{data[i].epoch}</th> 
              <th>{data[i].size}</th> 
              <th>{data[i].rate}</th> 
              <th>{data[i].node}</th> 
              <th>{data[i].mae}</th> 
            </tr>
            {/each}
          </tbody>
          <!-- <tfoot>
            <tr>
                <th>No</th> 
                <th>Path</th> 
                <th>Epoch</th> 
                <th>Test Size</th> 
                <th>Learning Rate</th> 
                <th>Nodes</th> 
                <th>MAE</th>          
            </tr>
          </tfoot> -->
        </table>
      </div>
</div>
