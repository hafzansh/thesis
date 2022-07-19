<script lang="ts">
  import Fa from "svelte-fa";
  import { page } from "$app/stores";
  import { faBars,faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
  import { session } from "$app/stores";
  import Breadcrumb from "../others/breadcrumb.svelte";
  let clicked:boolean=true
</script>
<div class="navbar rounded-2xl bg-base-200 m-5 shadow">
  <div class="flex-1">

    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden mt-0"
      ><Fa icon={faBars} class="text-[25px]" /></label
    >
    <Breadcrumb path={$page.url.pathname} />
  </div>
  <div class="flex-none">
    <p class="capitalize font-inter text-xl mr-3">{$session.user.full_name}</p>
    <div class="dropdown dropdown-end">
      <label for="" tabindex="0" class="btn btn-outline rounded-full">
          <Fa icon={faUserAstronaut} class="text-[30px] text-primary"/>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</div>