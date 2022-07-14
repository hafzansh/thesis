<script lang="ts">
  export let path: any;
  import Fa from "svelte-fa";
  import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
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

<div class="flex gap-2 text-2xl  items-center font-medium breadcrumbs ml-4">
  {#each crumbs as c, i}
    {#if i == crumbs.length - 1}
      {c.label}
    {:else}
      <a href={c.href}>{c.label}</a>
      <Fa icon={faAnglesRight} />
    {/if}
  {/each}
</div>
