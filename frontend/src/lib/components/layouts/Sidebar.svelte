<script lang="ts">
    import Footer from "@comp/layouts/Footer.svelte"
    import Navbar from "@comp/layouts/Navbar.svelte"
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <slot/>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="/padi">Padi</a></li>
      <li><a href="/">Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>