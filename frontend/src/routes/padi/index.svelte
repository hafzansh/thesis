<script context="module" lang="ts">
import { get } from "../../lib/shared/api";
import { baseApi } from "../../lib/utils/constants";
import { session } from "$app/stores";
import { onMount } from "svelte";
import {city} from "@utils/constants"
import type { Load } from "@sveltejs/kit";

</script>
<script lang="ts">
    let data:any
    data = get(`${baseApi}/padi`,$session.user.auth_token).then((response) => response.json())
</script>
<div class="overflow-x-auto">

    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {#await data then r}
        {#each r as row,i }
        
        <tr>
            
            <th>{i+1}</th>
            <th>{city[row.kota]}</th>
            <th>{row.tahun}</th>
            <th>{row.luas_panen}</th>
            
        </tr>
        {/each}
        {/await}
    </tbody>
    </table>
  </div>