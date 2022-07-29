<script lang="ts">
import { onMount } from "svelte/internal";

    import "../app.css"
    let ready=false
onMount(() => {
  
  ready=true
})
  </script>
    {#if ready}
  <div>
    <slot/>
  </div>
  {/if}