<script lang="ts">
  export let path: any;
  import Fa from "svelte-fa";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import {fly} from 'svelte/transition'
  let crumbs: any;
  $: {
    // Remove zero-length tokens.
    const tokens = path.split("/").filter((t: any) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    crumbs = tokens.map((t: any) => {
      tokenPath += "/" + t;
      const res = t.charAt(0).toUpperCase() + t.slice(1);
      return {
        label: res,
        href: tokenPath,
      };
    });

    // Add a way to get home too.
    crumbs.unshift({ label: "Dashboard", href: "/" });
  }
</script>

<div class="flex gap-2 text-2xl items-center font-medium font-inter breadcrumbs ml-4 mt-0" in:fly={{y:5}}>
  {#each crumbs as c, i}
    {#if i == crumbs.length - 1}
    <span class="text-primary" in:fly={{y:5}}>
        {c.label}
    </span>  
    {:else}
      <a href={c.href} class="text-gray-600" in:fly={{y:5}}>{c.label}</a>
      <div class="" in:fly={{y:5}}>
        <Fa icon={faChevronRight} class="mt-1 text-sm text-gray-600" />
      </div>
    {/if}
  {/each}
</div>
