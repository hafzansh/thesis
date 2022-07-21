<script lang="typescript">
    import papa from "papaparse";
    import { city } from "../../../lib/utils/constants";
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
          const data = results.data
          data.map((e:any)=>{
              e.kota = city[e.kota-1]
          })            
          a = { "path": "assets/e8f6745a74464925bfb7b1f6486e2834",
              "data": JSON.stringify(data)
          }
        },
      });
    };
  </script>
  <div class="container has-text-centered">
    <button
      class="button is-primary is-outlined is-inverted is-large"
      on:click={triggerUpload}
    >
      Upload a CSV file
    </button>
    <input
      type="file"
      class="is-hidden"
      bind:this={uploadInput}
      bind:files
      accept=".csv, .txt"
      on:change={onUpload}
    />
  </div>
  