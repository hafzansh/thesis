<script lang="ts">
  import Footer from "@comp/layouts/Footer.svelte";
  import Navbar from "@comp/layouts/Navbar.svelte";
  import Fa from 'svelte-fa'
  import { page } from "$app/stores";
  import { PageNav } from "../../utils/constants";
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-72  bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      {#each PageNav as item}
        <li >
          <div class="flex">
            <a class:active={$page.url.pathname === item.path} href={item.path}><Fa icon={item.icon} class="h-5 w-5"/></a>
              {item.title}
              {#if item.sublink}
              <button class="grow btn float-right" on:click={() => alert('asas')}>asdf</button>
            {/if}  
          </div>
          
        
          {#if item.sublink}
            {#each item.sublink as sub}              
              <a class="ml-5" class:active={$page.url.pathname === sub.path} href={sub.path}><Fa icon={sub.icon} class="h-5 w-5"/>{sub.title}</a>
            {/each}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
