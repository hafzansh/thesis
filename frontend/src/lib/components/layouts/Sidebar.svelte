<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Fa from "svelte-fa";
  import { page } from "$app/stores";
  import { PageNav } from "../../utils/constants";
  import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
  let clicked: boolean = false;
  import { session } from "$app/stores";
  const superuser = $session.user.is_superuser
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="mr-10">
      <Navbar />
    </div>
    <div class="pl-5 pr-5 ">
      <slot />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay" />
    <ul
      class="menu p-4 w-80 bg-base-200 text-base-content border-r-2 border-base-300"
    >
      <a href="/">
        <div class="flex w-full items-center justify-center mb-5 h-20">
          <img src="/images/logo.png" class="h-14 w-14" alt="logo" />

          <span class="text-[60px] font-bold align-middle ml-3 mb-2"
            >JST<span class="text-primary font-semibold">PADI</span></span
          >
        </div>
      </a>
      {#each PageNav as nav}
        <li>
          {#if !nav.sublink}
            <a href={nav.path} class:active={$page.url.pathname === nav.path}>
              <Fa icon={nav.icon} class="h-8 w-8" />
              <div class="font-inter">
                {nav.title}
              </div>
            </a>
          {/if}
          {#if nav.sublink}
            <span
              class="text-sm font-inter font-bold items-start mt-2 pb-0 pt-0"
              >{nav.title}</span
            >
            {#each nav.sublink as sub}
              <a
                class:active={$page.url.pathname === sub.path}
                href={sub.path}
                class=""
              >
                <Fa icon={sub.icon} class="h-8 w-8" />
                <div class="font-inter">
                  {sub.title}
                </div>
              </a>
            {/each}
          {/if}
        </li>
      {/each}
      {#if superuser}
      <li>
        <span class="text-sm font-inter font-bold items-start mt-2 pb-0 pt-0"
          >Administrator</span
        >

        <a
          class:active={$page.url.pathname === "/users"}
          href="/users"
          class=""
        >
          <Fa icon={faUsersCog} class="h-8 w-8" />
          <div class="font-inter">Manage Users</div>
        </a>
      </li>
      <div class="bottom-0 fixed inset-x-0" />
      {/if}
    </ul>
  </div>
</div>
