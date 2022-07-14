<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Fa from "svelte-fa";
  import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
  import { page } from "$app/stores";
  import { PageNav } from "../../utils/constants";
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="mr-10">
      <Navbar />
    </div>
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay" />
    <ul
      class="menu p-4 w-80 bg-base-200 text-base-content border-r-2 border-base-300"
    >
    <div class="flex w-full items-center justify-center mb-5 h-20">
      <img src="/images/logo.png" class="h-14 w-14" alt="logo" />

      <span class="text-[60px] font-bold align-middle ml-3 mb-2"
        >JST<span class="text-primary font-semibold">PADI</span></span
      >
    </div>
      {#each PageNav as nav}
        <li>
          {#if !nav.sublink}
            <a href={nav.path} class:active={$page.url.pathname === nav.path}>
              <Fa icon={nav.icon} class="h-8 w-8" />
              {nav.title}</a
            >
          {/if}
          {#if nav.sublink}
            <span class="text-sm font-bold items-start mt-2 pb-0"
              >{nav.title}</span
            >
            {#each nav.sublink as sub}
              <a
                class:active={$page.url.pathname === sub.path}
                href={sub.path}
                class=""
              >
                <Fa icon={sub.icon} class="h-8 w-8" />
                {sub.title}
              </a>
            {/each}
          {/if}
        </li>
      {/each}
      <div class="bottom-0 fixed inset-x-0 bg-base-300 ">
        
      </div>
    </ul>
  </div>
</div>
