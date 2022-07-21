<script lang="ts">
import { session } from "$app/stores";

import { post_data } from "../../../shared/api";
import { baseApi } from "../../../utils/constants";
import Grid from 'gridjs-svelte'

  export let data: any;
  let grid_data:any[] = []
  export let val: any;
  let body = { path: val, data: data };  
  const predict = async () => {
    const res = await post_data(`${baseApi}/model/predicts/`,$session.user.auth_token,body)
    const response = await res.json()
    grid_data = JSON.parse(response.detail.data)
  }
</script>

<button class="btn btn-primary" on:click={predict}>Send</button>

<Grid data={grid_data}/>