<script lang="ts">
  import Grid from "gridjs-svelte";
  export let data: any[] = [];
</script>

<div class="flex flex-col w-full h-full justify-center text-xs">   
    <article class="prose mx-10 mb-5 text-slate-300 justify-center w-full">
        <h1 class="text-slate-300">Preview Data</h1>        
        <!-- ... -->
      </article> 
      <div class="mx-10">
          <Grid
            pagination={{ enabled: true, limit: 6, summary: true, buttonsCount: 5 }}
            
            {data}
          />
      </div>
</div>
