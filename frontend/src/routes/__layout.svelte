<script lang="ts">
  import "../app.css";
  import Navbar from "@comp/layouts/Navbar.svelte";
  import "gridjs/dist/theme/mermaid.css";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import Toasts from "@comp/toast/Toasts.svelte";
  import Sidebar from "@comp/layouts/Sidebar.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";
  
  let ready = false;
  onMount(() => {
    if (!$session.user.authenticated) {
    goto('/login')
  }
    themeChange(false);
    ready = true;
  });
</script>

{#if ready}
  <div
    class="base-100"
    in:fade={{ duration: 1000 }}
    out:fade={{ duration: 500 }}
  >
    <Toasts />
    <SvelteToast options={{ reversed: true, intro: { y: 92 } }} />

    <!-- <Navbar/> -->
    <Sidebar><slot /></Sidebar>
  </div>
{/if}

<style>
  :root {
    --toastContainerTop: 1.5rem;
    --toastContainerRight: auto;
    --toastContainerBottom: auto;
    --toastContainerLeft: calc(50vw - 8rem);
    --toastBackground: #8c0327;
    --toastBarBackground: #c32c2c;
    /* --toastBarBackground: #c53030; */
  }
</style>
