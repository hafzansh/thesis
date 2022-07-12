<script lang="ts">
  import Fa from "svelte-fa"
  import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons"
  import {session} from '$app/stores'
import { app_title } from "../../utils/constants";
</script>

<div class="navbar bg-base-200">
  <div class="flex-1">
    <p class="btn btn-ghost normal-case text-xl">{app_title}</p>
    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"><Fa icon={faBarsStaggered}/></label>
  </div>
  <div class="flex-none">
    <p class="btn btn-ghost normal-case text-xl">{$session.user.full_name}</p>
    <div class="dropdown dropdown-end">
      <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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