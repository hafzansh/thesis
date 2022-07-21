<script lang="typescript">
    import papa from "papaparse";
    import { city, stasiun } from "../../../utils/constants";
    export let data:any
    export let next:boolean
    let a:{path?:string,data?:any} = {}
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
        skipEmptyLines:true,
        complete: function (results) {    
          data = results.data
          data.map((e:any)=>{
              e.kota = city[e.kota-1]
          })            
          data.map((e:any)=>{
              e.stasiun = stasiun[e.stasiun]
          })            
          
        },
      });
      next=!next
    };
  </script>
    <button
      class="btn btn-info btn-xl"
      on:click={triggerUpload}
    >
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
  