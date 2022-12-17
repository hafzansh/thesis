<script lang="ts">
  import { session } from "$app/stores";

  import { toast } from "@zerodevx/svelte-toast";
  import { delete_data } from "../../../shared/api";
  import { baseApi } from "../../../utils/constants";
  import type { Users } from "../../../utils/schema";
  export let selected_data: Users;
  export let data: Users[];
  export let values = false;
  async function submitForm() {
    const res = await delete_data(
      `${baseApi}/users/${selected_data.id}`,
      $session.user.auth_token
    ).then((res) => res.json());
    if (res.id) {
      data = data.filter(function (el: any) {
        return el.id != selected_data.id;
      });
      values = !values;
      return toast.push("Data has been deleted!");
    }
    return toast.push("Error, " + res.detail);
  }
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-delete"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="py-3 text-lg font-bold font-inter">Delete User</h3>
    <p class="py-1 font-inter">
      This user will be <b class="text-primary">deleted</b>!
    </p>
    <button class="btn btn-success float-right" on:click={submitForm}
      >Confirm</button
    >
    <label for="modal-delete" class="btn float-right mr-5">Cancel </label>
  </div>
</div>
