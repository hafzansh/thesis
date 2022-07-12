<script lang="ts">
import { onMount } from "svelte";

  
  import { fly, fade } from "svelte/transition";
  let ready:boolean=false
    onMount(() => ready = true)
</script>

<div class="bg-slate-900">
    <div class="flex flex-col justify-center min-h-screen items-center">
      {#if ready}
    <div in:fly="{{ y: -500, duration: 1000 }}" out:fade class="bg-slate-400">
        <h1>asass</h1>
    </div>
    {/if}
  </div>
</div>