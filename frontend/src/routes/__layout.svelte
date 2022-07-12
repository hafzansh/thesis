<script lang="ts">
  import "../app.css"
  import Navbar from '@comp/layouts/Navbar.svelte'
  import Sidebar from '@comp/layouts/Sidebar.svelte';
  import {fade} from 'svelte/transition'
import { onMount } from "svelte";
let ready:boolean=false
  onMount(()=> ready = true)
</script>
{#if ready}
<div class="bg-slate-200" in:fade out:fade={{duration:500}}>
  <Navbar/>
  <Sidebar><slot/></Sidebar>
</div>
{/if}