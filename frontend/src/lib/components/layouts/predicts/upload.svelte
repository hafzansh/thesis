<script lang="ts">
import { toast } from "@zerodevx/svelte-toast";

  import papa from "papaparse";
  import { city, stasiun } from "../../../utils/constants";
  export let data:any
  export let next: boolean;
  let a: { path?: string; data?: any } = {};
  export let file: any;
  let uploadInput: any, files: any;
  const triggerUpload = () => {
    uploadInput.click();
  };
  const onUpload = () => {
    if (!files.length) return;
    file = files[0];
    files = null;
    uploadInput.value = "";
    papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        
        data = results.data;
        if (!data[1].kota && !data[1].tahun){
          toast.push('Format Data error')
          
          setTimeout(window.location.href = '/model/predicts',1000)
        }

      },
    });
    next = !next;
  };
</script>

<button class="btn btn-primary text-primary-content btn-xl" on:click={triggerUpload}>
  Upload a CSV file
</button>
<input
  type="file"
  class="hidden"
  bind:this={uploadInput}
  bind:files
  accept=".csv, .txt"
  on:change={onUpload}
/>
