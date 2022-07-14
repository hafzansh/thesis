<script lang="ts">
  import { session } from "$app/stores";
  import Grid from "gridjs-svelte";
  import { onMount } from "svelte";
  import { baseApi } from "../../lib/utils/constants";
  import { get } from "../../lib/shared/api";
  let data: [] = [];
 
async function reload() {
    const res = await get(`${baseApi}/iklim`, $session.user.auth_token).then(
      (res) => res.json()
    );
    if(res) { data = res}
}
  onMount(async () => {
    reload()
  });
</script>

<div class="p-10 top-0">
  <Grid
    pagination={{ enabled: true, limit: 10, summary: true, buttonsCount: 5 }}
    fixedHeader={true}
    search={true}
    className={{
      table: "w-full",
      search: "",
    }}
    {data}
  />
</div>

